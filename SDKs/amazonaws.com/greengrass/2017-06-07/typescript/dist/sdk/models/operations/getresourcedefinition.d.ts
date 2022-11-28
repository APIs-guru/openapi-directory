import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourceDefinitionPathParams extends SpeakeasyBase {
    resourceDefinitionId: string;
}
export declare class GetResourceDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourceDefinitionRequest extends SpeakeasyBase {
    pathParams: GetResourceDefinitionPathParams;
    headers: GetResourceDefinitionHeaders;
}
export declare class GetResourceDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getResourceDefinitionResponse?: shared.GetResourceDefinitionResponse;
    statusCode: number;
}
