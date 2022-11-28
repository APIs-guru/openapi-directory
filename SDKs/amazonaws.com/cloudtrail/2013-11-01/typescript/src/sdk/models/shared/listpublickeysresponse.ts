import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";



// ListPublicKeysResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class ListPublicKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicKeyList", elemType: PublicKey })
  publicKeyList?: PublicKey[];
}
