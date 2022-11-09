import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Get } from "./get";


// TransactGetItem
/** 
 * Specifies an item to be retrieved as part of the transaction.
**/
export class TransactGetItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Get" })
  get: Get;
}
