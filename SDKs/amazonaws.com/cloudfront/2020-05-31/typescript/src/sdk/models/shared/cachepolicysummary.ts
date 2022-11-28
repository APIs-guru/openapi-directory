import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicy } from "./cachepolicy";
import { CachePolicyTypeEnum } from "./cachepolicytypeenum";



// CachePolicySummary
/** 
 * Contains a cache policy.
**/
export class CachePolicySummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cachePolicy: CachePolicy;

  @SpeakeasyMetadata()
  type: CachePolicyTypeEnum;
}
