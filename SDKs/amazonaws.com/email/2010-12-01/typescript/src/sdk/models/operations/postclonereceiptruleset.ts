import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostCloneReceiptRuleSetActionEnum {
    CloneReceiptRuleSet = "CloneReceiptRuleSet"
}

export enum PostCloneReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostCloneReceiptRuleSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCloneReceiptRuleSetActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCloneReceiptRuleSetVersionEnum;
}


export class PostCloneReceiptRuleSetHeaders extends SpeakeasyBase {
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


export class PostCloneReceiptRuleSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCloneReceiptRuleSetQueryParams;

  @SpeakeasyMetadata()
  headers: PostCloneReceiptRuleSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCloneReceiptRuleSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
