import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { ReplaceRootVolumeTaskStateEnum } from "./replacerootvolumetaskstateenum";
/**
 * Information about a root volume replacement task.
**/
export declare class ReplaceRootVolumeTask extends SpeakeasyBase {
    completeTime?: string;
    instanceId?: string;
    replaceRootVolumeTaskId?: string;
    startTime?: string;
    tags?: Tag[];
    taskState?: ReplaceRootVolumeTaskStateEnum;
}
