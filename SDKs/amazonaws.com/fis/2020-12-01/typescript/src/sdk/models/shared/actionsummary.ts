import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionTarget } from "./actiontarget";


// ActionSummary
/** 
 * Provides a summary of an action.
**/
export class ActionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targets", elemType: shared.ActionTarget })
  targets?: Map<string, ActionTarget>;
}
