import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateReceiptRuleSetActionEnum {
    CreateReceiptRuleSet = "CreateReceiptRuleSet"
}

export enum GetCreateReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCreateReceiptRuleSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateReceiptRuleSetActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateReceiptRuleSetVersionEnum;
}


export class GetCreateReceiptRuleSetHeaders extends SpeakeasyBase {
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


export class GetCreateReceiptRuleSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateReceiptRuleSetQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateReceiptRuleSetHeaders;
}


export class GetCreateReceiptRuleSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
