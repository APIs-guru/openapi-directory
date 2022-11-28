import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFileSystemPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class DeleteFileSystemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFileSystemRequest extends SpeakeasyBase {
    pathParams: DeleteFileSystemPathParams;
    headers: DeleteFileSystemHeaders;
}
export declare class DeleteFileSystemResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    fileSystemInUse?: any;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
