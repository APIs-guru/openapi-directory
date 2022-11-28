import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAttachmentStateEnum } from "./directconnectgatewayattachmentstateenum";
import { DirectConnectGatewayAttachmentTypeEnum } from "./directconnectgatewayattachmenttypeenum";



// DirectConnectGatewayAttachment
/** 
 * Information about an attachment between a Direct Connect gateway and a virtual interface.
**/
export class DirectConnectGatewayAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentState" })
  attachmentState?: DirectConnectGatewayAttachmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=attachmentType" })
  attachmentType?: DirectConnectGatewayAttachmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=stateChangeError" })
  stateChangeError?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceOwnerAccount" })
  virtualInterfaceOwnerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceRegion" })
  virtualInterfaceRegion?: string;
}
