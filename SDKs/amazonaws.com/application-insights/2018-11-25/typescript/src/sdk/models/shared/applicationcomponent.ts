import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsTypeEnum } from "./ostypeenum";
import { TierEnum } from "./tierenum";



// ApplicationComponent
/** 
 * Describes a standalone resource or similarly grouped resources that the application is made up of.
**/
export class ApplicationComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentName" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=ComponentRemarks" })
  componentRemarks?: string;

  @SpeakeasyMetadata({ data: "json, name=DetectedWorkload" })
  detectedWorkload?: Map<string, Map<string, string>>;

  @SpeakeasyMetadata({ data: "json, name=Monitor" })
  monitor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OsType" })
  osType?: OsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: TierEnum;
}
