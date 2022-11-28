import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCoreDefinitionPathParams extends SpeakeasyBase {
    coreDefinitionId: string;
}
export declare class GetCoreDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCoreDefinitionRequest extends SpeakeasyBase {
    pathParams: GetCoreDefinitionPathParams;
    headers: GetCoreDefinitionHeaders;
}
export declare class GetCoreDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getCoreDefinitionResponse?: shared.GetCoreDefinitionResponse;
    statusCode: number;
}
