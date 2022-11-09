import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCardinalityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardinality" })
  cardinality?: number;
}
