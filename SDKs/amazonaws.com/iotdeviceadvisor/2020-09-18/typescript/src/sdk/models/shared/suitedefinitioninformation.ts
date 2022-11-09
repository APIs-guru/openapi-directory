import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceUnderTest } from "./deviceundertest";


// SuiteDefinitionInformation
/** 
 * Information about the suite definition.
**/
export class SuiteDefinitionInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=defaultDevices", elemType: shared.DeviceUnderTest })
  defaultDevices?: DeviceUnderTest[];

  @Metadata({ data: "json, name=intendedForQualification" })
  intendedForQualification?: boolean;

  @Metadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @Metadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;
}
