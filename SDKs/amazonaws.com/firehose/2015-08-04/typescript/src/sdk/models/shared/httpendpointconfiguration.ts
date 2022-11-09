import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpEndpointConfiguration
/** 
 * Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
**/
export class HttpEndpointConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessKey" })
  accessKey?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Url" })
  url: string;
}
