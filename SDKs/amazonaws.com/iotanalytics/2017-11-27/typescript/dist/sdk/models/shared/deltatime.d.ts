import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Used to limit data to that which has arrived since the last execution of the action.
**/
export declare class DeltaTime extends SpeakeasyBase {
    offsetSeconds: number;
    timeExpression: string;
}
