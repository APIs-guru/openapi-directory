import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCoreDefinitionVersionPathParams extends SpeakeasyBase {
    coreDefinitionId: string;
}
export declare class CreateCoreDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class CreateCoreDefinitionVersionRequestBody extends SpeakeasyBase {
    cores?: shared.Core[];
}
export declare class CreateCoreDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: CreateCoreDefinitionVersionPathParams;
    headers: CreateCoreDefinitionVersionHeaders;
    request: CreateCoreDefinitionVersionRequestBody;
}
export declare class CreateCoreDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createCoreDefinitionVersionResponse?: shared.CreateCoreDefinitionVersionResponse;
    statusCode: number;
}
