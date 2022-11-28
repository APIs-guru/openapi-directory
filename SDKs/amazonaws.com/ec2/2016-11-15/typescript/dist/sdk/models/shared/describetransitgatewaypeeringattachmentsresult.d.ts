import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPeeringAttachment } from "./transitgatewaypeeringattachment";
export declare class DescribeTransitGatewayPeeringAttachmentsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[];
}
