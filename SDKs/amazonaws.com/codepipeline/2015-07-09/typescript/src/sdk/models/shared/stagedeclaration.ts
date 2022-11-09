import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionDeclaration } from "./actiondeclaration";
import { BlockerDeclaration } from "./blockerdeclaration";


// StageDeclaration
/** 
 * Represents information about a stage and its definition.
**/
export class StageDeclaration extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.ActionDeclaration })
  actions: ActionDeclaration[];

  @Metadata({ data: "json, name=blockers", elemType: shared.BlockerDeclaration })
  blockers?: BlockerDeclaration[];

  @Metadata({ data: "json, name=name" })
  name: string;
}
