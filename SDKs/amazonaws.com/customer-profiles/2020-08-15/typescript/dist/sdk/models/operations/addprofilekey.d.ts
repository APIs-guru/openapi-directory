import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddProfileKeyPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class AddProfileKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddProfileKeyRequestBody extends SpeakeasyBase {
    keyName: string;
    profileId: string;
    values: string[];
}
export declare class AddProfileKeyRequest extends SpeakeasyBase {
    pathParams: AddProfileKeyPathParams;
    headers: AddProfileKeyHeaders;
    request: AddProfileKeyRequestBody;
}
export declare class AddProfileKeyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    addProfileKeyResponse?: shared.AddProfileKeyResponse;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
