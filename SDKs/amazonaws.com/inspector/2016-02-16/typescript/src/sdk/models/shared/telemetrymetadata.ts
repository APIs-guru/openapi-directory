import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TelemetryMetadata
/** 
 * The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.
**/
export class TelemetryMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=dataSize" })
  dataSize?: number;

  @SpeakeasyMetadata({ data: "json, name=messageType" })
  messageType: string;
}
