import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteArchivePathParams extends SpeakeasyBase {
    accountId: string;
    archiveId: string;
    vaultName: string;
}
export declare class DeleteArchiveHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteArchiveRequest extends SpeakeasyBase {
    pathParams: DeleteArchivePathParams;
    headers: DeleteArchiveHeaders;
}
export declare class DeleteArchiveResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
