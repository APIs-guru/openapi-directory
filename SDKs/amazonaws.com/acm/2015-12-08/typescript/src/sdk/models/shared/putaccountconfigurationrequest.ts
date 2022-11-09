import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpiryEventsConfiguration } from "./expiryeventsconfiguration";


export class PutAccountConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpiryEvents" })
  expiryEvents?: ExpiryEventsConfiguration;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;
}
