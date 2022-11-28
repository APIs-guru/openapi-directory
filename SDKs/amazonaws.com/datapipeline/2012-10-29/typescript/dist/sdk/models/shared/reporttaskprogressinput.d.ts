import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
/**
 * Contains the parameters for ReportTaskProgress.
**/
export declare class ReportTaskProgressInput extends SpeakeasyBase {
    fields?: Field[];
    taskId: string;
}
