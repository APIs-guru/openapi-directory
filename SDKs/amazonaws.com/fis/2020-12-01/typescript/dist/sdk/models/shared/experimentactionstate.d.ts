import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentActionStatusEnum } from "./experimentactionstatusenum";
/**
 * Describes the state of an action.
**/
export declare class ExperimentActionState extends SpeakeasyBase {
    reason?: string;
    status?: ExperimentActionStatusEnum;
}
