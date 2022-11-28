import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicy } from "./cachepolicy";



export class CreateCachePolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cachePolicy?: CachePolicy;
}
