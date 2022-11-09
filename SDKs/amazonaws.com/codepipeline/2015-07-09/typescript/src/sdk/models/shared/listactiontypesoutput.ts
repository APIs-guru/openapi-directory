import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionType } from "./actiontype";


// ListActionTypesOutput
/** 
 * Represents the output of a <code>ListActionTypes</code> action.
**/
export class ListActionTypesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionTypes", elemType: shared.ActionType })
  actionTypes: ActionType[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
