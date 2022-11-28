import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteConnectorProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteConnectorProfileRequestBody extends SpeakeasyBase {
    connectorProfileName: string;
    forceDelete?: boolean;
}
export declare class DeleteConnectorProfileRequest extends SpeakeasyBase {
    headers: DeleteConnectorProfileHeaders;
    request: DeleteConnectorProfileRequestBody;
}
export declare class DeleteConnectorProfileResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteConnectorProfileResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
