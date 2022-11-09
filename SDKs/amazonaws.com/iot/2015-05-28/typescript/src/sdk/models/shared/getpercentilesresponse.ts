import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PercentPair } from "./percentpair";


export class GetPercentilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentiles", elemType: shared.PercentPair })
  percentiles?: PercentPair[];
}
