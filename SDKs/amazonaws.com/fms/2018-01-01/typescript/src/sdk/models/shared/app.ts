import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// App
/** 
 * An individual Firewall Manager application.
**/
export class App extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppName" })
  appName: string;

  @Metadata({ data: "json, name=Port" })
  port: number;

  @Metadata({ data: "json, name=Protocol" })
  protocol: string;
}
