import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyList } from "./publickeylist";



export class ListPublicKeysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  publicKeyList?: PublicKeyList;
}
