import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCardinalityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardinality" })
  cardinality?: number;
}
