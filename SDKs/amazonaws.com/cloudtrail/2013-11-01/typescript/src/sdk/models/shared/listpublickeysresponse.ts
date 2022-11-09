import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublicKey } from "./publickey";


// ListPublicKeysResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class ListPublicKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PublicKeyList", elemType: shared.PublicKey })
  publicKeyList?: PublicKey[];
}
