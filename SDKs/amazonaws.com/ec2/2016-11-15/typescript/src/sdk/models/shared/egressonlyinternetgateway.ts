import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InternetGatewayAttachment } from "./internetgatewayattachment";
import { Tag } from "./tag";



// EgressOnlyInternetGateway
/** 
 * Describes an egress-only internet gateway.
**/
export class EgressOnlyInternetGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InternetGatewayAttachment })
  attachments?: InternetGatewayAttachment[];

  @SpeakeasyMetadata()
  egressOnlyInternetGatewayId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
