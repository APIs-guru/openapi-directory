import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemovePermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoveAllPermissions" })
  removeAllPermissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StatementId" })
  statementId?: string;
}
