import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformValuesEnum } from "./platformvaluesenum";
import { ImportInstanceVolumeDetailItem } from "./importinstancevolumedetailitem";
/**
 * Describes an import instance task.
**/
export declare class ImportInstanceTaskDetails extends SpeakeasyBase {
    description?: string;
    instanceId?: string;
    platform?: PlatformValuesEnum;
    volumes?: ImportInstanceVolumeDetailItem[];
}
