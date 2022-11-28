import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpiryEventsConfiguration } from "./expiryeventsconfiguration";



export class PutAccountConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpiryEvents" })
  expiryEvents?: ExpiryEventsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;
}
