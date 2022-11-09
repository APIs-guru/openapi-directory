import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ElasticsearchDestinationDescription } from "./elasticsearchdestinationdescription";
import { ExtendedS3DestinationDescription } from "./extendeds3destinationdescription";
import { HttpEndpointDestinationDescription } from "./httpendpointdestinationdescription";
import { RedshiftDestinationDescription } from "./redshiftdestinationdescription";
import { S3DestinationDescription } from "./s3destinationdescription";
import { SplunkDestinationDescription } from "./splunkdestinationdescription";


// DestinationDescription
/** 
 * Describes the destination for a delivery stream.
**/
export class DestinationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationId" })
  destinationId: string;

  @Metadata({ data: "json, name=ElasticsearchDestinationDescription" })
  elasticsearchDestinationDescription?: ElasticsearchDestinationDescription;

  @Metadata({ data: "json, name=ExtendedS3DestinationDescription" })
  extendedS3DestinationDescription?: ExtendedS3DestinationDescription;

  @Metadata({ data: "json, name=HttpEndpointDestinationDescription" })
  httpEndpointDestinationDescription?: HttpEndpointDestinationDescription;

  @Metadata({ data: "json, name=RedshiftDestinationDescription" })
  redshiftDestinationDescription?: RedshiftDestinationDescription;

  @Metadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription?: S3DestinationDescription;

  @Metadata({ data: "json, name=SplunkDestinationDescription" })
  splunkDestinationDescription?: SplunkDestinationDescription;
}
