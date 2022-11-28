import { SpeakeasyBase } from "../../../internal/utils";
import { InputStatusEnum } from "./inputstatusenum";
/**
 * Information about the configuration of an input.
**/
export declare class InputConfiguration extends SpeakeasyBase {
    creationTime: Date;
    inputArn: string;
    inputDescription?: string;
    inputName: string;
    lastUpdateTime: Date;
    status: InputStatusEnum;
}
