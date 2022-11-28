import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayBackendDefaults } from "./virtualgatewaybackenddefaults";
import { VirtualGatewayListener } from "./virtualgatewaylistener";
import { VirtualGatewayLogging } from "./virtualgatewaylogging";



// VirtualGatewaySpec
/** 
 * An object that represents the specification of a service mesh resource.
**/
export class VirtualGatewaySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendDefaults" })
  backendDefaults?: VirtualGatewayBackendDefaults;

  @SpeakeasyMetadata({ data: "json, name=listeners", elemType: VirtualGatewayListener })
  listeners: VirtualGatewayListener[];

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: VirtualGatewayLogging;
}
