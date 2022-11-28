import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServicesInScopeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetServicesInScopeRequest extends SpeakeasyBase {
    headers: GetServicesInScopeHeaders;
}
export declare class GetServicesInScopeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getServicesInScopeResponse?: shared.GetServicesInScopeResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
