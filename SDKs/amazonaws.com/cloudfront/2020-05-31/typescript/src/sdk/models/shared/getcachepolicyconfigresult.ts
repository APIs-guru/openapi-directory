import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyConfig } from "./cachepolicyconfig";



export class GetCachePolicyConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cachePolicyConfig?: CachePolicyConfig;
}
