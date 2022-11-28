import { SpeakeasyBase } from "../../../internal/utils";
import { TimeToLiveSpecification } from "./timetolivespecification";
/**
 * Represents the input of an <code>UpdateTimeToLive</code> operation.
**/
export declare class UpdateTimeToLiveInput extends SpeakeasyBase {
    tableName: string;
    timeToLiveSpecification: TimeToLiveSpecification;
}
