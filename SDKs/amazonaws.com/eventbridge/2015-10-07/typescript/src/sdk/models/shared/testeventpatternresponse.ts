import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestEventPatternResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Result" })
  result?: boolean;
}
