import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Condition } from "./condition";


export class PutPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: string;

  @Metadata({ data: "json, name=Condition" })
  condition?: Condition;

  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=Policy" })
  policy?: string;

  @Metadata({ data: "json, name=Principal" })
  principal?: string;

  @Metadata({ data: "json, name=StatementId" })
  statementId?: string;
}
