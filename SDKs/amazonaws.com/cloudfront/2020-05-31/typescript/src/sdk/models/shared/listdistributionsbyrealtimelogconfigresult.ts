import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionList } from "./distributionlist";



export class ListDistributionsByRealtimeLogConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distributionList?: DistributionList;
}
