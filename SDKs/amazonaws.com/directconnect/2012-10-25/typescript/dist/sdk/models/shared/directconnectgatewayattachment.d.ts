import { SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAttachmentStateEnum } from "./directconnectgatewayattachmentstateenum";
import { DirectConnectGatewayAttachmentTypeEnum } from "./directconnectgatewayattachmenttypeenum";
/**
 * Information about an attachment between a Direct Connect gateway and a virtual interface.
**/
export declare class DirectConnectGatewayAttachment extends SpeakeasyBase {
    attachmentState?: DirectConnectGatewayAttachmentStateEnum;
    attachmentType?: DirectConnectGatewayAttachmentTypeEnum;
    directConnectGatewayId?: string;
    stateChangeError?: string;
    virtualInterfaceId?: string;
    virtualInterfaceOwnerAccount?: string;
    virtualInterfaceRegion?: string;
}
