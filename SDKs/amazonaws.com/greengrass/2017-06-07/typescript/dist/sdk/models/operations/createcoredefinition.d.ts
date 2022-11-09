import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateCoreDefinitionHeaders extends SpeakeasyBase {
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
 * Information about a core definition version.
**/
export declare class CreateCoreDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    cores?: shared.Core[];
}
export declare class CreateCoreDefinitionRequestBody extends SpeakeasyBase {
    initialVersion?: CreateCoreDefinitionRequestBodyInitialVersion;
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateCoreDefinitionRequest extends SpeakeasyBase {
    headers: CreateCoreDefinitionHeaders;
    request: CreateCoreDefinitionRequestBody;
}
export declare class CreateCoreDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createCoreDefinitionResponse?: shared.CreateCoreDefinitionResponse;
    statusCode: number;
}
