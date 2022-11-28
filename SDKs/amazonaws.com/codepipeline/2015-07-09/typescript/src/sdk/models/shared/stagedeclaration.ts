import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionDeclaration } from "./actiondeclaration";
import { BlockerDeclaration } from "./blockerdeclaration";



// StageDeclaration
/** 
 * Represents information about a stage and its definition.
**/
export class StageDeclaration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: ActionDeclaration })
  actions: ActionDeclaration[];

  @SpeakeasyMetadata({ data: "json, name=blockers", elemType: BlockerDeclaration })
  blockers?: BlockerDeclaration[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
