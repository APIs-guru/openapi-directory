import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SubmitAttachmentStateChangesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitAttachmentStateChanges = "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges"
}
export declare class SubmitAttachmentStateChangesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SubmitAttachmentStateChangesXAmzTargetEnum;
}
export declare class SubmitAttachmentStateChangesRequest extends SpeakeasyBase {
    headers: SubmitAttachmentStateChangesHeaders;
    request: shared.SubmitAttachmentStateChangesRequest;
}
export declare class SubmitAttachmentStateChangesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    submitAttachmentStateChangesResponse?: shared.SubmitAttachmentStateChangesResponse;
}
