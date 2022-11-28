import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePartnerEventSourceXAmzTargetEnum {
    AwsEventsDeletePartnerEventSource = "AWSEvents.DeletePartnerEventSource"
}
export declare class DeletePartnerEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePartnerEventSourceXAmzTargetEnum;
}
export declare class DeletePartnerEventSourceRequest extends SpeakeasyBase {
    headers: DeletePartnerEventSourceHeaders;
    request: shared.DeletePartnerEventSourceRequest;
}
export declare class DeletePartnerEventSourceResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    operationDisabledException?: any;
    statusCode: number;
}
