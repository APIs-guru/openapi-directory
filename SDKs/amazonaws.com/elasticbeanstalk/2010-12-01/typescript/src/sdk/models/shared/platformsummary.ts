import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformStatusEnum } from "./platformstatusenum";



// PlatformSummary
/** 
 * Summary information about a platform version.
**/
export class PlatformSummary extends SpeakeasyBase {
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
  platformOwner?: string;

  @SpeakeasyMetadata()
  platformStatus?: PlatformStatusEnum;

  @SpeakeasyMetadata()
  platformVersion?: string;

  @SpeakeasyMetadata()
  supportedAddonList?: string[];

  @SpeakeasyMetadata()
  supportedTierList?: string[];
}
