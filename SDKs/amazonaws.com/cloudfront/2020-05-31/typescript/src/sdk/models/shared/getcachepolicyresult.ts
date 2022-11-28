import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicy } from "./cachepolicy";



export class GetCachePolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cachePolicy?: CachePolicy;
}
