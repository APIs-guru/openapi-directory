import { SpeakeasyBase } from "../../../internal/utils";
import { FailureTypeEnum } from "./failuretypeenum";
/**
 * Represents information about failure details.
**/
export declare class FailureDetails extends SpeakeasyBase {
    externalExecutionId?: string;
    message: string;
    type: FailureTypeEnum;
}
