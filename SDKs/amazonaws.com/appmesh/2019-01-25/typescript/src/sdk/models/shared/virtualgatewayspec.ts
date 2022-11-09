import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualGatewayBackendDefaults } from "./virtualgatewaybackenddefaults";
import { VirtualGatewayListener } from "./virtualgatewaylistener";
import { VirtualGatewayLogging } from "./virtualgatewaylogging";


// VirtualGatewaySpec
/** 
 * An object that represents the specification of a service mesh resource.
**/
export class VirtualGatewaySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendDefaults" })
  backendDefaults?: VirtualGatewayBackendDefaults;

  @Metadata({ data: "json, name=listeners", elemType: shared.VirtualGatewayListener })
  listeners: VirtualGatewayListener[];

  @Metadata({ data: "json, name=logging" })
  logging?: VirtualGatewayLogging;
}
