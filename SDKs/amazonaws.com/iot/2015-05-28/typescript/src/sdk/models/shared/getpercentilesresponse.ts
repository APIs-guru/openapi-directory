import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PercentPair } from "./percentpair";



export class GetPercentilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentiles", elemType: PercentPair })
  percentiles?: PercentPair[];
}
