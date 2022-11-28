import { SpeakeasyBase } from "../../../internal/utils";
import { BundleTaskError } from "./bundletaskerror";
import { BundleTaskStateEnum } from "./bundletaskstateenum";
import { Storage } from "./storage";
/**
 * Describes a bundle task.
**/
export declare class BundleTask extends SpeakeasyBase {
    bundleId?: string;
    bundleTaskError?: BundleTaskError;
    instanceId?: string;
    progress?: string;
    startTime?: Date;
    state?: BundleTaskStateEnum;
    storage?: Storage;
    updateTime?: Date;
}
