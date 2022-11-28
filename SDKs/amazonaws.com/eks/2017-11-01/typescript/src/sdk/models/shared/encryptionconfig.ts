import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Provider } from "./provider";



// EncryptionConfig
/** 
 * The encryption configuration for the cluster.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: Provider;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];
}
