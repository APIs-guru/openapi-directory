import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDeliveryChannelXAmzTargetEnum {
    StarlingDoveServiceDeleteDeliveryChannel = "StarlingDoveService.DeleteDeliveryChannel"
}
export declare class DeleteDeliveryChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeliveryChannelXAmzTargetEnum;
}
export declare class DeleteDeliveryChannelRequest extends SpeakeasyBase {
    headers: DeleteDeliveryChannelHeaders;
    request: shared.DeleteDeliveryChannelRequest;
}
export declare class DeleteDeliveryChannelResponse extends SpeakeasyBase {
    contentType: string;
    lastDeliveryChannelDeleteFailedException?: any;
    noSuchDeliveryChannelException?: any;
    statusCode: number;
}
