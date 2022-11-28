import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProfilePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProfileRequestBody extends SpeakeasyBase {
    profileId: string;
}
export declare class DeleteProfileRequest extends SpeakeasyBase {
    pathParams: DeleteProfilePathParams;
    headers: DeleteProfileHeaders;
    request: DeleteProfileRequestBody;
}
export declare class DeleteProfileResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    deleteProfileResponse?: shared.DeleteProfileResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
