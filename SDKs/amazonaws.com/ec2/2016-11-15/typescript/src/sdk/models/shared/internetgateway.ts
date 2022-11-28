import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InternetGatewayAttachment } from "./internetgatewayattachment";
import { Tag } from "./tag";



// InternetGateway
/** 
 * Describes an internet gateway.
**/
export class InternetGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InternetGatewayAttachment })
  attachments?: InternetGatewayAttachment[];

  @SpeakeasyMetadata()
  internetGatewayId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
