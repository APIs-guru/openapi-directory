import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceUnderTest } from "./deviceundertest";
/**
 * Gets Suite Definition Configuration.
**/
export declare class SuiteDefinitionConfiguration extends SpeakeasyBase {
    devicePermissionRoleArn?: string;
    devices?: DeviceUnderTest[];
    intendedForQualification?: boolean;
    rootGroup?: string;
    suiteDefinitionName?: string;
}
