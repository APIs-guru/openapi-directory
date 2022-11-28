import { SpeakeasyBase } from "../../../internal/utils";
import { ExportEnvironmentEnum } from "./exportenvironmentenum";
/**
 * Describes an instance to export.
**/
export declare class InstanceExportDetails extends SpeakeasyBase {
    instanceId?: string;
    targetEnvironment?: ExportEnvironmentEnum;
}
