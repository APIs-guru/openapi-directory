import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeDeclaration } from "./actiontypedeclaration";



export class UpdateActionTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType: ActionTypeDeclaration;
}
