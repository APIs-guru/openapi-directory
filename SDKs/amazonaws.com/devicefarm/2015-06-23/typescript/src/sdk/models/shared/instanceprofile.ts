import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceProfile
/** 
 * Represents the instance profile.
**/
export class InstanceProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=excludeAppPackagesFromCleanup" })
  excludeAppPackagesFromCleanup?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageCleanup" })
  packageCleanup?: boolean;

  @Metadata({ data: "json, name=rebootAfterUse" })
  rebootAfterUse?: boolean;
}
