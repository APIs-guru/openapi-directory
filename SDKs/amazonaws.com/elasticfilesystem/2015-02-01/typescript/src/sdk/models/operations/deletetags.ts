import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" })
  fileSystemId: string;
}


export class DeleteTagsHeaders extends SpeakeasyBase {
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


export class DeleteTagsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}


export class DeleteTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTagsPathParams;

  @SpeakeasyMetadata()
  headers: DeleteTagsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteTagsRequestBody;
}


export class DeleteTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileSystemNotFound?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
