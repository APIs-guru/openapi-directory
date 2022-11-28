import { SpeakeasyBase } from "../../../internal/utils";
import { Provider } from "./provider";
/**
 * The encryption configuration for the cluster.
**/
export declare class EncryptionConfig extends SpeakeasyBase {
    provider?: Provider;
    resources?: string[];
}
