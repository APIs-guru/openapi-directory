import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTypeDeclaration } from "./actiontypedeclaration";


export class UpdateActionTypeInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionType" })
  actionType: ActionTypeDeclaration;
}
