import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCloneReceiptRuleSetActionEnum {
    CloneReceiptRuleSet = "CloneReceiptRuleSet"
}

export enum GetCloneReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCloneReceiptRuleSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCloneReceiptRuleSetActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OriginalRuleSetName" })
  originalRuleSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCloneReceiptRuleSetVersionEnum;
}


export class GetCloneReceiptRuleSetHeaders extends SpeakeasyBase {
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


export class GetCloneReceiptRuleSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCloneReceiptRuleSetQueryParams;

  @SpeakeasyMetadata()
  headers: GetCloneReceiptRuleSetHeaders;
}


export class GetCloneReceiptRuleSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
