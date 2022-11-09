import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Provider } from "./provider";


// EncryptionConfig
/** 
 * The encryption configuration for the cluster.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=provider" })
  provider?: Provider;

  @Metadata({ data: "json, name=resources" })
  resources?: string[];
}
