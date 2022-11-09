import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceUnderTest } from "./deviceundertest";
/**
 * Information about the suite definition.
**/
export declare class SuiteDefinitionInformation extends SpeakeasyBase {
    createdAt?: Date;
    defaultDevices?: DeviceUnderTest[];
    intendedForQualification?: boolean;
    suiteDefinitionId?: string;
    suiteDefinitionName?: string;
}
