import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectConnectGatewayAttachment } from "./directconnectgatewayattachment";


export class DescribeDirectConnectGatewayAttachmentsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayAttachments", elemType: shared.DirectConnectGatewayAttachment })
  directConnectGatewayAttachments?: DirectConnectGatewayAttachment[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
