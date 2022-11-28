import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagResource20161125OperationEnum {
    Tag = "Tag"
}


export class TagResource20161125QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: TagResource20161125OperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Resource" })
  resource: string;
}


export class TagResource20161125Headers extends SpeakeasyBase {
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


export class TagResource20161125Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TagResource20161125QueryParams;

  @SpeakeasyMetadata()
  headers: TagResource20161125Headers;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request: Uint8Array;
}


export class TagResource20161125Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
