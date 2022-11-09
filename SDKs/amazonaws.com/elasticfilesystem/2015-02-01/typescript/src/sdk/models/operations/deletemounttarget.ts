import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMountTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MountTargetId" })
  mountTargetId: string;
}


export class DeleteMountTargetHeaders extends SpeakeasyBase {
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


export class DeleteMountTargetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMountTargetPathParams;

  @Metadata()
  headers: DeleteMountTargetHeaders;
}


export class DeleteMountTargetResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeout?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  mountTargetNotFound?: any;

  @Metadata()
  statusCode: number;
}
