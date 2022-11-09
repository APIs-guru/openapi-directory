import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConnectorDefinitionPathParams extends SpeakeasyBase {
    connectorDefinitionId: string;
}
export declare class GetConnectorDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConnectorDefinitionRequest extends SpeakeasyBase {
    pathParams: GetConnectorDefinitionPathParams;
    headers: GetConnectorDefinitionHeaders;
}
export declare class GetConnectorDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getConnectorDefinitionResponse?: shared.GetConnectorDefinitionResponse;
    statusCode: number;
}
