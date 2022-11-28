import { SpeakeasyBase } from "../../../internal/utils";
import { WorkGroupConfigurationUpdates } from "./workgroupconfigurationupdates";
import { WorkGroupStateEnum } from "./workgroupstateenum";
export declare class UpdateWorkGroupInput extends SpeakeasyBase {
    configurationUpdates?: WorkGroupConfigurationUpdates;
    description?: string;
    state?: WorkGroupStateEnum;
    workGroup: string;
}
