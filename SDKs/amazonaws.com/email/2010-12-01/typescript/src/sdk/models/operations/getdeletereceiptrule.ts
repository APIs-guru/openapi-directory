import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteReceiptRuleActionEnum {
    DeleteReceiptRule = "DeleteReceiptRule"
}

export enum GetDeleteReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteReceiptRuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteReceiptRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleName" })
  ruleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteReceiptRuleVersionEnum;
}


export class GetDeleteReceiptRuleHeaders extends SpeakeasyBase {
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


export class GetDeleteReceiptRuleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteReceiptRuleQueryParams;

  @Metadata()
  headers: GetDeleteReceiptRuleHeaders;
}


export class GetDeleteReceiptRuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
