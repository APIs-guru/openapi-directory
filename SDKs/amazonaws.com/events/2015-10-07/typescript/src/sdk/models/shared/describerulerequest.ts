import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
