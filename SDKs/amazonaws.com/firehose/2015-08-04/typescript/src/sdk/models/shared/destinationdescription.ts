import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=DestinationId" })
  destinationId: string;

  @SpeakeasyMetadata({ data: "json, name=ElasticsearchDestinationDescription" })
  elasticsearchDestinationDescription?: ElasticsearchDestinationDescription;

  @SpeakeasyMetadata({ data: "json, name=ExtendedS3DestinationDescription" })
  extendedS3DestinationDescription?: ExtendedS3DestinationDescription;

  @SpeakeasyMetadata({ data: "json, name=HttpEndpointDestinationDescription" })
  httpEndpointDestinationDescription?: HttpEndpointDestinationDescription;

  @SpeakeasyMetadata({ data: "json, name=RedshiftDestinationDescription" })
  redshiftDestinationDescription?: RedshiftDestinationDescription;

  @SpeakeasyMetadata({ data: "json, name=S3DestinationDescription" })
  s3DestinationDescription?: S3DestinationDescription;

  @SpeakeasyMetadata({ data: "json, name=SplunkDestinationDescription" })
  splunkDestinationDescription?: SplunkDestinationDescription;
}
