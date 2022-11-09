import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceUnderTest } from "./deviceundertest";


// SuiteRunConfiguration
/** 
 * Gets suite run configuration.
**/
export class SuiteRunConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=primaryDevice" })
  primaryDevice?: DeviceUnderTest;

  @Metadata({ data: "json, name=selectedTestList" })
  selectedTestList?: string[];
}
