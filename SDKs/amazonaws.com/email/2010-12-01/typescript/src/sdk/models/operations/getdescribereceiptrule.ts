import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeReceiptRuleActionEnum {
    DescribeReceiptRule = "DescribeReceiptRule"
}

export enum GetDescribeReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeReceiptRuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeReceiptRuleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeReceiptRuleVersionEnum;
}


export class GetDescribeReceiptRuleHeaders extends SpeakeasyBase {
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


export class GetDescribeReceiptRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeReceiptRuleQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeReceiptRuleHeaders;
}


export class GetDescribeReceiptRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
