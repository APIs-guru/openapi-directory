import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceUnderTest } from "./deviceundertest";



// SuiteDefinitionInformation
/** 
 * Information about the suite definition.
**/
export class SuiteDefinitionInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultDevices", elemType: DeviceUnderTest })
  defaultDevices?: DeviceUnderTest[];

  @SpeakeasyMetadata({ data: "json, name=intendedForQualification" })
  intendedForQualification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;
}
