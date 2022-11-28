import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyList } from "./cachepolicylist";



export class ListCachePoliciesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cachePolicyList?: CachePolicyList;
}
