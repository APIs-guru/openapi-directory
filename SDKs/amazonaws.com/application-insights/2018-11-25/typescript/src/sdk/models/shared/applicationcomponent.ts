import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsTypeEnum } from "./ostypeenum";
import { TierEnum } from "./tierenum";


// ApplicationComponent
/** 
 * Describes a standalone resource or similarly grouped resources that the application is made up of.
**/
export class ApplicationComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComponentName" })
  componentName?: string;

  @Metadata({ data: "json, name=ComponentRemarks" })
  componentRemarks?: string;

  @Metadata({ data: "json, name=DetectedWorkload" })
  detectedWorkload?: Map<string, Map<string, string>>;

  @Metadata({ data: "json, name=Monitor" })
  monitor?: boolean;

  @Metadata({ data: "json, name=OsType" })
  osType?: OsTypeEnum;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=Tier" })
  tier?: TierEnum;
}
