import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// App
/** 
 * An individual Firewall Manager application.
**/
export class App extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppName" })
  appName: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol: string;
}
