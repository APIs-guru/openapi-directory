import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFileSystemPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" })
  fileSystemId: string;
}


export class DeleteFileSystemPolicyHeaders extends SpeakeasyBase {
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


export class DeleteFileSystemPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFileSystemPolicyPathParams;

  @Metadata()
  headers: DeleteFileSystemPolicyHeaders;
}


export class DeleteFileSystemPolicyResponse extends SpeakeasyBase {
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
