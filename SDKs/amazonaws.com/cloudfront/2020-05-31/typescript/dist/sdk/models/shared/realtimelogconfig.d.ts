import { SpeakeasyBase } from "../../../internal/utils";
import { EndPoint } from "./endpoint";
/**
 * A real-time log configuration.
**/
export declare class RealtimeLogConfig extends SpeakeasyBase {
    arn: string;
    endPoints: EndPoint[];
    fields: string[];
    name: string;
    samplingRate: number;
}
