import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestEventPatternRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Event" })
  event: string;

  @Metadata({ data: "json, name=EventPattern" })
  eventPattern: string;
}
