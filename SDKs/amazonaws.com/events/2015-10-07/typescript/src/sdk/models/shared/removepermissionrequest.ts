import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemovePermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=RemoveAllPermissions" })
  removeAllPermissions?: boolean;

  @Metadata({ data: "json, name=StatementId" })
  statementId?: string;
}
