import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAmi } from "./customami";
import { PlatformFramework } from "./platformframework";
import { PlatformStatusEnum } from "./platformstatusenum";
import { PlatformProgrammingLanguage } from "./platformprogramminglanguage";



// PlatformDescription
/** 
 * Detailed information about a platform version.
**/
export class PlatformDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CustomAmi })
  customAmiList?: CustomAmi[];

  @SpeakeasyMetadata()
  dateCreated?: Date;

  @SpeakeasyMetadata()
  dateUpdated?: Date;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: PlatformFramework })
  frameworks?: PlatformFramework[];

  @SpeakeasyMetadata()
  maintainer?: string;

  @SpeakeasyMetadata()
  operatingSystemName?: string;

  @SpeakeasyMetadata()
  operatingSystemVersion?: string;

  @SpeakeasyMetadata()
  platformArn?: string;

  @SpeakeasyMetadata()
  platformBranchLifecycleState?: string;

  @SpeakeasyMetadata()
  platformBranchName?: string;

  @SpeakeasyMetadata()
  platformCategory?: string;

  @SpeakeasyMetadata()
  platformLifecycleState?: string;

  @SpeakeasyMetadata()
  platformName?: string;

  @SpeakeasyMetadata()
  platformOwner?: string;

  @SpeakeasyMetadata()
  platformStatus?: PlatformStatusEnum;

  @SpeakeasyMetadata()
  platformVersion?: string;

  @SpeakeasyMetadata({ elemType: PlatformProgrammingLanguage })
  programmingLanguages?: PlatformProgrammingLanguage[];

  @SpeakeasyMetadata()
  solutionStackName?: string;

  @SpeakeasyMetadata()
  supportedAddonList?: string[];

  @SpeakeasyMetadata()
  supportedTierList?: string[];
}
