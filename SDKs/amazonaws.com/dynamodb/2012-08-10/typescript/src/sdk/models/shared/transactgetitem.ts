import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Get } from "./get";



// TransactGetItem
/** 
 * Specifies an item to be retrieved as part of the transaction.
**/
export class TransactGetItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Get" })
  get: Get;
}
