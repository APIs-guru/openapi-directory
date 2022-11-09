import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputStatusEnum } from "./inputstatusenum";
/**
 * Information about the input.
**/
export declare class InputSummary extends SpeakeasyBase {
    creationTime?: Date;
    inputArn?: string;
    inputDescription?: string;
    inputName?: string;
    lastUpdateTime?: Date;
    status?: InputStatusEnum;
}
