import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicy } from "./cachepolicy";



export class UpdateCachePolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cachePolicy?: CachePolicy;
}
