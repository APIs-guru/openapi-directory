import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteComponentPathParams extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteComponentRequest extends SpeakeasyBase {
    pathParams: DeleteComponentPathParams;
    headers: DeleteComponentHeaders;
}
export declare class DeleteComponentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
