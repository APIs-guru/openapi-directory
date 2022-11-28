import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileObjectTypeTemplatePathParams extends SpeakeasyBase {
    templateId: string;
}
export declare class GetProfileObjectTypeTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetProfileObjectTypeTemplateRequest extends SpeakeasyBase {
    pathParams: GetProfileObjectTypeTemplatePathParams;
    headers: GetProfileObjectTypeTemplateHeaders;
}
export declare class GetProfileObjectTypeTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    getProfileObjectTypeTemplateResponse?: shared.GetProfileObjectTypeTemplateResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
