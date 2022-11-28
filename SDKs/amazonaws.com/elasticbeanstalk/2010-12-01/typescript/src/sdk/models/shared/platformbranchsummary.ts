import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlatformBranchSummary
/** 
 * Summary information about a platform branch.
**/
export class PlatformBranchSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  branchName?: string;

  @SpeakeasyMetadata()
  branchOrder?: number;

  @SpeakeasyMetadata()
  lifecycleState?: string;

  @SpeakeasyMetadata()
  platformName?: string;

  @SpeakeasyMetadata()
  supportedTierList?: string[];
}
