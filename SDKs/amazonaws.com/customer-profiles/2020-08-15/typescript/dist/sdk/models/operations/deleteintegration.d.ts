import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteIntegrationPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteIntegrationRequestBody extends SpeakeasyBase {
    uri: string;
}
export declare class DeleteIntegrationRequest extends SpeakeasyBase {
    pathParams: DeleteIntegrationPathParams;
    headers: DeleteIntegrationHeaders;
    request: DeleteIntegrationRequestBody;
}
export declare class DeleteIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    deleteIntegrationResponse?: shared.DeleteIntegrationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
