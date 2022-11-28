import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileObjectTypePathParams extends SpeakeasyBase {
    domainName: string;
    objectTypeName: string;
}
export declare class GetProfileObjectTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetProfileObjectTypeRequest extends SpeakeasyBase {
    pathParams: GetProfileObjectTypePathParams;
    headers: GetProfileObjectTypeHeaders;
}
export declare class GetProfileObjectTypeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    getProfileObjectTypeResponse?: shared.GetProfileObjectTypeResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
