import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpiryEventsConfiguration } from "./expiryeventsconfiguration";



export class GetAccountConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpiryEvents" })
  expiryEvents?: ExpiryEventsConfiguration;
}
