import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceUnderTest } from "./deviceundertest";



// SuiteRunConfiguration
/** 
 * Gets suite run configuration.
**/
export class SuiteRunConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primaryDevice" })
  primaryDevice?: DeviceUnderTest;

  @SpeakeasyMetadata({ data: "json, name=selectedTestList" })
  selectedTestList?: string[];
}
