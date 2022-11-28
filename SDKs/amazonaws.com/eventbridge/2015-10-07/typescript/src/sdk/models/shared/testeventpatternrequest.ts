import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestEventPatternRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Event" })
  event: string;

  @SpeakeasyMetadata({ data: "json, name=EventPattern" })
  eventPattern: string;
}
