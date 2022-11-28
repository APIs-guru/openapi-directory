import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the instance profile.
**/
export declare class InstanceProfile extends SpeakeasyBase {
    arn?: string;
    description?: string;
    excludeAppPackagesFromCleanup?: string[];
    name?: string;
    packageCleanup?: boolean;
    rebootAfterUse?: boolean;
}
