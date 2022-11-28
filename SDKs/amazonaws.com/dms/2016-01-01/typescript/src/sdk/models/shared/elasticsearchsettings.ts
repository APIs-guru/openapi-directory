import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticsearchSettings
/** 
 * Provides information that defines an Elasticsearch endpoint.
**/
export class ElasticsearchSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointUri" })
  endpointUri: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorRetryDuration" })
  errorRetryDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=FullLoadErrorPercentage" })
  fullLoadErrorPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn: string;
}
