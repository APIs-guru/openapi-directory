import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.
**/
export declare class TelemetryMetadata extends SpeakeasyBase {
    count: number;
    dataSize?: number;
    messageType: string;
}
