import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToConnectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PostToConnectionHeaders extends SpeakeasyBase {
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


export class PostToConnectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: string;
}


export class PostToConnectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostToConnectionPathParams;

  @Metadata()
  headers: PostToConnectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostToConnectionRequestBody;
}


export class PostToConnectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  goneException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;
}
