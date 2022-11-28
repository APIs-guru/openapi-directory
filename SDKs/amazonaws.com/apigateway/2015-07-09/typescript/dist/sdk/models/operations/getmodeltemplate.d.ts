import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelTemplatePathParams extends SpeakeasyBase {
    modelName: string;
    restapiId: string;
}
export declare class GetModelTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModelTemplateRequest extends SpeakeasyBase {
    pathParams: GetModelTemplatePathParams;
    headers: GetModelTemplateHeaders;
}
export declare class GetModelTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    template?: shared.Template;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
