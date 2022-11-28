import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProfileKeyPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteProfileKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProfileKeyRequestBody extends SpeakeasyBase {
    keyName: string;
    profileId: string;
    values: string[];
}
export declare class DeleteProfileKeyRequest extends SpeakeasyBase {
    pathParams: DeleteProfileKeyPathParams;
    headers: DeleteProfileKeyHeaders;
    request: DeleteProfileKeyRequestBody;
}
export declare class DeleteProfileKeyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    deleteProfileKeyResponse?: shared.DeleteProfileKeyResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
