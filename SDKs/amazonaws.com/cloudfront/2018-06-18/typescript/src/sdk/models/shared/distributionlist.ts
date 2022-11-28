import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionSummary } from "./distributionsummary";



// DistributionList
/** 
 * A distribution list.
**/
export class DistributionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated: boolean;

  @SpeakeasyMetadata({ elemType: DistributionSummary })
  items?: DistributionSummary[];

  @SpeakeasyMetadata()
  marker: string;

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
