import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpiryEventsConfiguration } from "./expiryeventsconfiguration";
export declare class PutAccountConfigurationRequest extends SpeakeasyBase {
    expiryEvents?: ExpiryEventsConfiguration;
    idempotencyToken: string;
}
