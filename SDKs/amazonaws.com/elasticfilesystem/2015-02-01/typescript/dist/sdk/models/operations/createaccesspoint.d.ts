import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAccessPointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
**/
export declare class CreateAccessPointRequestBodyPosixUser extends SpeakeasyBase {
    gid?: number;
    secondaryGids?: number[];
    uid?: number;
}
/**
 * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
**/
export declare class CreateAccessPointRequestBodyRootDirectory extends SpeakeasyBase {
    creationInfo?: shared.CreationInfo;
    path?: string;
}
export declare class CreateAccessPointRequestBody extends SpeakeasyBase {
    clientToken: string;
    fileSystemId: string;
    posixUser?: CreateAccessPointRequestBodyPosixUser;
    rootDirectory?: CreateAccessPointRequestBodyRootDirectory;
    tags?: shared.Tag[];
}
export declare class CreateAccessPointRequest extends SpeakeasyBase {
    headers: CreateAccessPointHeaders;
    request: CreateAccessPointRequestBody;
}
export declare class CreateAccessPointResponse extends SpeakeasyBase {
    accessPointAlreadyExists?: any;
    accessPointDescription?: shared.AccessPointDescription;
    accessPointLimitExceeded?: any;
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    incorrectFileSystemLifeCycleState?: any;
    internalServerError?: any;
    statusCode: number;
}
