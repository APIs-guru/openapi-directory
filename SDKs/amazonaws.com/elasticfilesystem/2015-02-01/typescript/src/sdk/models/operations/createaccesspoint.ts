import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAccessPointHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateAccessPointRequestBodyPosixUser
/** 
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
**/
export class CreateAccessPointRequestBodyPosixUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=Gid" })
  gid?: number;

  @Metadata({ data: "json, name=SecondaryGids" })
  secondaryGids?: number[];

  @Metadata({ data: "json, name=Uid" })
  uid?: number;
}


// CreateAccessPointRequestBodyRootDirectory
/** 
 * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
**/
export class CreateAccessPointRequestBodyRootDirectory extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationInfo" })
  creationInfo?: shared.CreationInfo;

  @Metadata({ data: "json, name=Path" })
  path?: string;
}


export class CreateAccessPointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=PosixUser" })
  posixUser?: CreateAccessPointRequestBodyPosixUser;

  @Metadata({ data: "json, name=RootDirectory" })
  rootDirectory?: CreateAccessPointRequestBodyRootDirectory;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateAccessPointRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAccessPointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAccessPointRequestBody;
}


export class CreateAccessPointResponse extends SpeakeasyBase {
  @Metadata()
  accessPointAlreadyExists?: any;

  @Metadata()
  accessPointDescription?: shared.AccessPointDescription;

  @Metadata()
  accessPointLimitExceeded?: any;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incorrectFileSystemLifeCycleState?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
