import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetReceiptRulePositionActionEnum {
    SetReceiptRulePosition = "SetReceiptRulePosition"
}

export enum GetSetReceiptRulePositionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSetReceiptRulePositionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetReceiptRulePositionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=After" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetReceiptRulePositionVersionEnum;
}


export class GetSetReceiptRulePositionHeaders extends SpeakeasyBase {
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


export class GetSetReceiptRulePositionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetReceiptRulePositionQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetReceiptRulePositionHeaders;
}


export class GetSetReceiptRulePositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
