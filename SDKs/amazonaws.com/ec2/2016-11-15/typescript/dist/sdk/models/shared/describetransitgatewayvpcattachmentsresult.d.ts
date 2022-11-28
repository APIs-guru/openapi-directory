import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayVpcAttachment } from "./transitgatewayvpcattachment";
export declare class DescribeTransitGatewayVpcAttachmentsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayVpcAttachments?: TransitGatewayVpcAttachment[];
}
