import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicySummary } from "./cachepolicysummary";



// CachePolicyList
/** 
 * A list of cache policies.
**/
export class CachePolicyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CachePolicySummary })
  items?: CachePolicySummary[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
