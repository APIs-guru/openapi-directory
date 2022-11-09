import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConnectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class DeleteConnectionHeaders extends SpeakeasyBase {
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


export class DeleteConnectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConnectionPathParams;

  @Metadata()
  headers: DeleteConnectionHeaders;
}


export class DeleteConnectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  goneException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
