import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFileSystemPolicyPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class DeleteFileSystemPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFileSystemPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteFileSystemPolicyPathParams;
    headers: DeleteFileSystemPolicyHeaders;
}
export declare class DeleteFileSystemPolicyResponse extends SpeakeasyBase {
    contentType: string;
    fileSystemNotFound?: any;
    incorrectFileSystemLifeCycleState?: any;
    internalServerError?: any;
    statusCode: number;
}
