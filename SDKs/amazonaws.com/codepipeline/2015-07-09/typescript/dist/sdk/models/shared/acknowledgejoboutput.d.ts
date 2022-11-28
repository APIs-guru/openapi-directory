import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Represents the output of an AcknowledgeJob action.
**/
export declare class AcknowledgeJobOutput extends SpeakeasyBase {
    status?: JobStatusEnum;
}
