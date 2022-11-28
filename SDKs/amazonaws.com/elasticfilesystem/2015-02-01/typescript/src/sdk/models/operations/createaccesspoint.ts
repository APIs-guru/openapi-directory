import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAccessPointHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateAccessPointRequestBodyPosixUser
/** 
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
**/
export class CreateAccessPointRequestBodyPosixUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Gid" })
  gid?: number;

  @SpeakeasyMetadata({ data: "json, name=SecondaryGids" })
  secondaryGids?: number[];

  @SpeakeasyMetadata({ data: "json, name=Uid" })
  uid?: number;
}


// CreateAccessPointRequestBodyRootDirectory
/** 
 * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
**/
export class CreateAccessPointRequestBodyRootDirectory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationInfo" })
  creationInfo?: shared.CreationInfo;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;
}


export class CreateAccessPointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=PosixUser" })
  posixUser?: CreateAccessPointRequestBodyPosixUser;

  @SpeakeasyMetadata({ data: "json, name=RootDirectory" })
  rootDirectory?: CreateAccessPointRequestBodyRootDirectory;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateAccessPointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAccessPointHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAccessPointRequestBody;
}


export class CreateAccessPointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessPointAlreadyExists?: any;

  @SpeakeasyMetadata()
  accessPointDescription?: shared.AccessPointDescription;

  @SpeakeasyMetadata()
  accessPointLimitExceeded?: any;

  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileSystemNotFound?: any;

  @SpeakeasyMetadata()
  incorrectFileSystemLifeCycleState?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
