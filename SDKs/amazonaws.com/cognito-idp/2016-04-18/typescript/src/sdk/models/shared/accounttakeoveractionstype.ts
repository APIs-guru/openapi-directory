import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountTakeoverActionType } from "./accounttakeoveractiontype";
import { AccountTakeoverActionType } from "./accounttakeoveractiontype";
import { AccountTakeoverActionType } from "./accounttakeoveractiontype";


// AccountTakeoverActionsType
/** 
 * Account takeover actions type.
**/
export class AccountTakeoverActionsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=HighAction" })
  highAction?: AccountTakeoverActionType;

  @Metadata({ data: "json, name=LowAction" })
  lowAction?: AccountTakeoverActionType;

  @Metadata({ data: "json, name=MediumAction" })
  mediumAction?: AccountTakeoverActionType;
}
