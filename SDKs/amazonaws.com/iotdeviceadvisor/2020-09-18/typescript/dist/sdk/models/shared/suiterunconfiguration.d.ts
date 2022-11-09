import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceUnderTest } from "./deviceundertest";
/**
 * Gets suite run configuration.
**/
export declare class SuiteRunConfiguration extends SpeakeasyBase {
    primaryDevice?: DeviceUnderTest;
    selectedTestList?: string[];
}
