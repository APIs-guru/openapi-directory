import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceUnderTest } from "./deviceundertest";
/**
 * Gets suite run configuration.
**/
export declare class SuiteRunConfiguration extends SpeakeasyBase {
    primaryDevice?: DeviceUnderTest;
    selectedTestList?: string[];
}
