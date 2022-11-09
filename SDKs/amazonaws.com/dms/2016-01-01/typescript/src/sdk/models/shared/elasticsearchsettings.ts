import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElasticsearchSettings
/** 
 * Provides information that defines an Elasticsearch endpoint.
**/
export class ElasticsearchSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointUri" })
  endpointUri: string;

  @Metadata({ data: "json, name=ErrorRetryDuration" })
  errorRetryDuration?: number;

  @Metadata({ data: "json, name=FullLoadErrorPercentage" })
  fullLoadErrorPercentage?: number;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn: string;
}
