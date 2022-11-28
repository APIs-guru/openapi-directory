import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { Action } from "./action";
import { ProtocolEnumEnum } from "./protocolenumenum";



// Listener
/** 
 * Information about a listener.
**/
export class Listener extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alpnPolicy?: string[];

  @SpeakeasyMetadata({ elemType: Certificate })
  certificates?: Certificate[];

  @SpeakeasyMetadata({ elemType: Action })
  defaultActions?: Action[];

  @SpeakeasyMetadata()
  listenerArn?: string;

  @SpeakeasyMetadata()
  loadBalancerArn?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  protocol?: ProtocolEnumEnum;

  @SpeakeasyMetadata()
  sslPolicy?: string;
}
