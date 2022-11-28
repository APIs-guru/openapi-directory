import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionIdList } from "./distributionidlist";



export class ListDistributionsByOriginRequestPolicyIdResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distributionIdList?: DistributionIdList;
}
