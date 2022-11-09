import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceId" })
  resourceId: string;
}


export class TagResourceHeaders extends SpeakeasyBase {
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


export class TagResourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags: shared.Tag[];
}


export class TagResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagResourcePathParams;

  @Metadata()
  headers: TagResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TagResourceRequestBody;
}


export class TagResourceResponse extends SpeakeasyBase {
  @Metadata()
  accessPointNotFound?: any;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
