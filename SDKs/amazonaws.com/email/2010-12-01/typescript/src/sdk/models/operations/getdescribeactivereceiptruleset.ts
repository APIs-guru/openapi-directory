import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeActiveReceiptRuleSetActionEnum {
    DescribeActiveReceiptRuleSet = "DescribeActiveReceiptRuleSet"
}

export enum GetDescribeActiveReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeActiveReceiptRuleSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeActiveReceiptRuleSetActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeActiveReceiptRuleSetVersionEnum;
}


export class GetDescribeActiveReceiptRuleSetHeaders extends SpeakeasyBase {
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


export class GetDescribeActiveReceiptRuleSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeActiveReceiptRuleSetQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeActiveReceiptRuleSetHeaders;
}


export class GetDescribeActiveReceiptRuleSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
