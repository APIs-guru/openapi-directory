import { SpeakeasyBase } from "../../../internal/utils";
import { InstalledComponentLifecycleStateEnum } from "./installedcomponentlifecyclestateenum";
/**
 * Contains information about a component on a Greengrass core device.
**/
export declare class InstalledComponent extends SpeakeasyBase {
    componentName?: string;
    componentVersion?: string;
    isRoot?: boolean;
    lifecycleState?: InstalledComponentLifecycleStateEnum;
    lifecycleStateDetails?: string;
}
