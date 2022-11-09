import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeReceiptRuleActionEnum {
    DescribeReceiptRule = "DescribeReceiptRule"
}

export enum GetDescribeReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeReceiptRuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeReceiptRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleName" })
  ruleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeReceiptRuleVersionEnum;
}


export class GetDescribeReceiptRuleHeaders extends SpeakeasyBase {
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


export class GetDescribeReceiptRuleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeReceiptRuleQueryParams;

  @Metadata()
  headers: GetDescribeReceiptRuleHeaders;
}


export class GetDescribeReceiptRuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
