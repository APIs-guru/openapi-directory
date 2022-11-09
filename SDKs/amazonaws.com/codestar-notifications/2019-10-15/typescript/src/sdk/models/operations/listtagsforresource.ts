import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTagsForResourceHeaders extends SpeakeasyBase {
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


export class ListTagsForResourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;
}


export class ListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListTagsForResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListTagsForResourceRequestBody;
}


export class ListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTagsForResourceResult?: shared.ListTagsForResourceResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
