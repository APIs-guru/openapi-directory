import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagResourceHeaders extends SpeakeasyBase {
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


export class UntagResourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}


export class UntagResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UntagResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UntagResourceRequestBody;
}


export class UntagResourceResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  untagResourceResult?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
