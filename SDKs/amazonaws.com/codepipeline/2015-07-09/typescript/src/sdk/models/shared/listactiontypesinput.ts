import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionOwnerEnum } from "./actionownerenum";


// ListActionTypesInput
/** 
 * Represents the input of a <code>ListActionTypes</code> action.
**/
export class ListActionTypesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionOwnerFilter" })
  actionOwnerFilter?: ActionOwnerEnum;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=regionFilter" })
  regionFilter?: string;
}
