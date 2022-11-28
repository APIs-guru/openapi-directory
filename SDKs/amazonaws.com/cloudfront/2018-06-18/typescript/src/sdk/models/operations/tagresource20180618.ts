import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagResource20180618OperationEnum {
    Tag = "Tag"
}


export class TagResource20180618QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: TagResource20180618OperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Resource" })
  resource: string;
}


export class TagResource20180618Headers extends SpeakeasyBase {
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


export class TagResource20180618Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TagResource20180618QueryParams;

  @SpeakeasyMetadata()
  headers: TagResource20180618Headers;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request: Uint8Array;
}


export class TagResource20180618Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
