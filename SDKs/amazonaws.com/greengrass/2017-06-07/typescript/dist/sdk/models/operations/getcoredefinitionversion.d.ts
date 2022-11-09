import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCoreDefinitionVersionPathParams extends SpeakeasyBase {
    coreDefinitionId: string;
    coreDefinitionVersionId: string;
}
export declare class GetCoreDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCoreDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: GetCoreDefinitionVersionPathParams;
    headers: GetCoreDefinitionVersionHeaders;
}
export declare class GetCoreDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getCoreDefinitionVersionResponse?: shared.GetCoreDefinitionVersionResponse;
    statusCode: number;
}
