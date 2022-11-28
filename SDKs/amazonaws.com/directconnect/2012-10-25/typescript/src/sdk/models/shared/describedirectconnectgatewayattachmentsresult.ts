import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAttachment } from "./directconnectgatewayattachment";



export class DescribeDirectConnectGatewayAttachmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayAttachments", elemType: DirectConnectGatewayAttachment })
  directConnectGatewayAttachments?: DirectConnectGatewayAttachment[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
