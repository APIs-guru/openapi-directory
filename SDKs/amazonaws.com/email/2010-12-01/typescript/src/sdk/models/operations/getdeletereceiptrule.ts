import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteReceiptRuleActionEnum {
    DeleteReceiptRule = "DeleteReceiptRule"
}

export enum GetDeleteReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteReceiptRuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteReceiptRuleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteReceiptRuleVersionEnum;
}


export class GetDeleteReceiptRuleHeaders extends SpeakeasyBase {
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


export class GetDeleteReceiptRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteReceiptRuleQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteReceiptRuleHeaders;
}


export class GetDeleteReceiptRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
