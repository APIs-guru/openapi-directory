import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpEndpointConfiguration
/** 
 * Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
**/
export class HttpEndpointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessKey" })
  accessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url: string;
}
