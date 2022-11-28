import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionType } from "./actiontype";



// ListActionTypesOutput
/** 
 * Represents the output of a <code>ListActionTypes</code> action.
**/
export class ListActionTypesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionTypes", elemType: ActionType })
  actionTypes: ActionType[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
