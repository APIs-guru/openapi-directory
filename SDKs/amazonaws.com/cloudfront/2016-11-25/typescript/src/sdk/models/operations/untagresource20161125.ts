import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UntagResource20161125OperationEnum {
    Untag = "Untag"
}


export class UntagResource20161125QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: UntagResource20161125OperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Resource" })
  resource: string;
}


export class UntagResource20161125Headers extends SpeakeasyBase {
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


export class UntagResource20161125Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UntagResource20161125QueryParams;

  @SpeakeasyMetadata()
  headers: UntagResource20161125Headers;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request: Uint8Array;
}


export class UntagResource20161125Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
