import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestEventPatternResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Result" })
  result?: boolean;
}
