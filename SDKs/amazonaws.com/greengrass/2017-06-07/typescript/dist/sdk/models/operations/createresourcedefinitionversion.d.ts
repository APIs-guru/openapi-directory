import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateResourceDefinitionVersionPathParams extends SpeakeasyBase {
    resourceDefinitionId: string;
}
export declare class CreateResourceDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class CreateResourceDefinitionVersionRequestBody extends SpeakeasyBase {
    resources?: shared.Resource[];
}
export declare class CreateResourceDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: CreateResourceDefinitionVersionPathParams;
    headers: CreateResourceDefinitionVersionHeaders;
    request: CreateResourceDefinitionVersionRequestBody;
}
export declare class CreateResourceDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createResourceDefinitionVersionResponse?: shared.CreateResourceDefinitionVersionResponse;
    statusCode: number;
}
