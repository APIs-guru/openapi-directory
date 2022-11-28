import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionIdList } from "./distributionidlist";



export class ListDistributionsByKeyGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distributionIdList?: DistributionIdList;
}
