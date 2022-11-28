import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProfileObjectPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteProfileObjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProfileObjectRequestBody extends SpeakeasyBase {
    objectTypeName: string;
    profileId: string;
    profileObjectUniqueKey: string;
}
export declare class DeleteProfileObjectRequest extends SpeakeasyBase {
    pathParams: DeleteProfileObjectPathParams;
    headers: DeleteProfileObjectHeaders;
    request: DeleteProfileObjectRequestBody;
}
export declare class DeleteProfileObjectResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    deleteProfileObjectResponse?: shared.DeleteProfileObjectResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
