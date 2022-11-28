import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTakeoverActionType } from "./accounttakeoveractiontype";



// AccountTakeoverActionsType
/** 
 * Account takeover actions type.
**/
export class AccountTakeoverActionsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HighAction" })
  highAction?: AccountTakeoverActionType;

  @SpeakeasyMetadata({ data: "json, name=LowAction" })
  lowAction?: AccountTakeoverActionType;

  @SpeakeasyMetadata({ data: "json, name=MediumAction" })
  mediumAction?: AccountTakeoverActionType;
}
