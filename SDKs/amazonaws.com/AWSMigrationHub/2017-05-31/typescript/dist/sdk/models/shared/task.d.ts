import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * Task object encapsulating task information.
**/
export declare class Task extends SpeakeasyBase {
    progressPercent?: number;
    status: StatusEnum;
    statusDetail?: string;
}
