import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateResourceDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
/**
 * Information about a resource definition version.
**/
export declare class CreateResourceDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    resources?: shared.Resource[];
}
export declare class CreateResourceDefinitionRequestBody extends SpeakeasyBase {
    initialVersion?: CreateResourceDefinitionRequestBodyInitialVersion;
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateResourceDefinitionRequest extends SpeakeasyBase {
    headers: CreateResourceDefinitionHeaders;
    request: CreateResourceDefinitionRequestBody;
}
export declare class CreateResourceDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createResourceDefinitionResponse?: shared.CreateResourceDefinitionResponse;
    statusCode: number;
}
