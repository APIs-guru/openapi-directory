import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProfileObjectPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class PutProfileObjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutProfileObjectRequestBody extends SpeakeasyBase {
    object: string;
    objectTypeName: string;
}
export declare class PutProfileObjectRequest extends SpeakeasyBase {
    pathParams: PutProfileObjectPathParams;
    headers: PutProfileObjectHeaders;
    request: PutProfileObjectRequestBody;
}
export declare class PutProfileObjectResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    putProfileObjectResponse?: shared.PutProfileObjectResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
