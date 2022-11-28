import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionOwnerEnum } from "./actionownerenum";



// ListActionTypesInput
/** 
 * Represents the input of a <code>ListActionTypes</code> action.
**/
export class ListActionTypesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionOwnerFilter" })
  actionOwnerFilter?: ActionOwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=regionFilter" })
  regionFilter?: string;
}
