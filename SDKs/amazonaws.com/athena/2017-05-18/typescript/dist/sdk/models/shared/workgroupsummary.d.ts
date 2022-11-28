import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { WorkGroupStateEnum } from "./workgroupstateenum";
/**
 * The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.
**/
export declare class WorkGroupSummary extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    engineVersion?: EngineVersion;
    name?: string;
    state?: WorkGroupStateEnum;
}
