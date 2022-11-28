import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyConfig } from "./publickeyconfig";



export class GetPublicKeyConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  publicKeyConfig?: PublicKeyConfig;
}
