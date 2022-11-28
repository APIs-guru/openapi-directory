import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";



export class PutPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: Condition;

  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal?: string;

  @SpeakeasyMetadata({ data: "json, name=StatementId" })
  statementId?: string;
}
