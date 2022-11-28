import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformBranchSummary } from "./platformbranchsummary";



export class ListPlatformBranchesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: PlatformBranchSummary })
  platformBranchSummaryList?: PlatformBranchSummary[];
}
