import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateInstanceProfileRequest extends SpeakeasyBase {
    arn: string;
    description?: string;
    excludeAppPackagesFromCleanup?: string[];
    name?: string;
    packageCleanup?: boolean;
    rebootAfterUse?: boolean;
}
