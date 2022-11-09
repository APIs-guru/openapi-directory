import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceUnderTest } from "./deviceundertest";


// SuiteDefinitionConfiguration
/** 
 * Gets Suite Definition Configuration.
**/
export class SuiteDefinitionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePermissionRoleArn" })
  devicePermissionRoleArn?: string;

  @Metadata({ data: "json, name=devices", elemType: shared.DeviceUnderTest })
  devices?: DeviceUnderTest[];

  @Metadata({ data: "json, name=intendedForQualification" })
  intendedForQualification?: boolean;

  @Metadata({ data: "json, name=rootGroup" })
  rootGroup?: string;

  @Metadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;
}
