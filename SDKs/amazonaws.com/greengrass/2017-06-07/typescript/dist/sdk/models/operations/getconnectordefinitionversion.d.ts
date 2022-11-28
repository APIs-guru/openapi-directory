import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConnectorDefinitionVersionPathParams extends SpeakeasyBase {
    connectorDefinitionId: string;
    connectorDefinitionVersionId: string;
}
export declare class GetConnectorDefinitionVersionQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetConnectorDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConnectorDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: GetConnectorDefinitionVersionPathParams;
    queryParams: GetConnectorDefinitionVersionQueryParams;
    headers: GetConnectorDefinitionVersionHeaders;
}
export declare class GetConnectorDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getConnectorDefinitionVersionResponse?: shared.GetConnectorDefinitionVersionResponse;
    statusCode: number;
}
