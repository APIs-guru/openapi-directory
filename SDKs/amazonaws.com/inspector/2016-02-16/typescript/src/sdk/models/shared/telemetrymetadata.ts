import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TelemetryMetadata
/** 
 * The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.
**/
export class TelemetryMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=dataSize" })
  dataSize?: number;

  @Metadata({ data: "json, name=messageType" })
  messageType: string;
}
