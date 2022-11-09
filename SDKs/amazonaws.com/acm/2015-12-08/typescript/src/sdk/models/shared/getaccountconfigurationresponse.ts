import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpiryEventsConfiguration } from "./expiryeventsconfiguration";


export class GetAccountConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpiryEvents" })
  expiryEvents?: ExpiryEventsConfiguration;
}
