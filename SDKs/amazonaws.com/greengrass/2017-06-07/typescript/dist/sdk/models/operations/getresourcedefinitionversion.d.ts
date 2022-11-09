import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourceDefinitionVersionPathParams extends SpeakeasyBase {
    resourceDefinitionId: string;
    resourceDefinitionVersionId: string;
}
export declare class GetResourceDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourceDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: GetResourceDefinitionVersionPathParams;
    headers: GetResourceDefinitionVersionHeaders;
}
export declare class GetResourceDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getResourceDefinitionVersionResponse?: shared.GetResourceDefinitionVersionResponse;
    statusCode: number;
}
