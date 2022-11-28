import { SpeakeasyBase } from "../../../internal/utils";
import { ActionDeclaration } from "./actiondeclaration";
import { BlockerDeclaration } from "./blockerdeclaration";
/**
 * Represents information about a stage and its definition.
**/
export declare class StageDeclaration extends SpeakeasyBase {
    actions: ActionDeclaration[];
    blockers?: BlockerDeclaration[];
    name: string;
}
