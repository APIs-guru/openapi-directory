import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionIdList } from "./distributionidlist";



export class ListDistributionsByCachePolicyIdResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distributionIdList?: DistributionIdList;
}
