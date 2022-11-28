import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateInstanceProfileRequest extends SpeakeasyBase {
    description?: string;
    excludeAppPackagesFromCleanup?: string[];
    name: string;
    packageCleanup?: boolean;
    rebootAfterUse?: boolean;
}
