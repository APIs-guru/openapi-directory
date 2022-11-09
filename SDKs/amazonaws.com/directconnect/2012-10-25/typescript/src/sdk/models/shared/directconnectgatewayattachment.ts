import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectConnectGatewayAttachmentStateEnum } from "./directconnectgatewayattachmentstateenum";
import { DirectConnectGatewayAttachmentTypeEnum } from "./directconnectgatewayattachmenttypeenum";


// DirectConnectGatewayAttachment
/** 
 * Information about an attachment between a Direct Connect gateway and a virtual interface.
**/
export class DirectConnectGatewayAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentState" })
  attachmentState?: DirectConnectGatewayAttachmentStateEnum;

  @Metadata({ data: "json, name=attachmentType" })
  attachmentType?: DirectConnectGatewayAttachmentTypeEnum;

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=stateChangeError" })
  stateChangeError?: string;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;

  @Metadata({ data: "json, name=virtualInterfaceOwnerAccount" })
  virtualInterfaceOwnerAccount?: string;

  @Metadata({ data: "json, name=virtualInterfaceRegion" })
  virtualInterfaceRegion?: string;
}
