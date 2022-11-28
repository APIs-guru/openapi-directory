import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceUnderTest } from "./deviceundertest";



// SuiteDefinitionConfiguration
/** 
 * Gets Suite Definition Configuration.
**/
export class SuiteDefinitionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePermissionRoleArn" })
  devicePermissionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=devices", elemType: DeviceUnderTest })
  devices?: DeviceUnderTest[];

  @SpeakeasyMetadata({ data: "json, name=intendedForQualification" })
  intendedForQualification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rootGroup" })
  rootGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;
}
