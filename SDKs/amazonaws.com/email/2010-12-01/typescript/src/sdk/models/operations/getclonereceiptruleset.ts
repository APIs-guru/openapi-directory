import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCloneReceiptRuleSetActionEnum {
    CloneReceiptRuleSet = "CloneReceiptRuleSet"
}

export enum GetCloneReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCloneReceiptRuleSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCloneReceiptRuleSetActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OriginalRuleSetName" })
  originalRuleSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCloneReceiptRuleSetVersionEnum;
}


export class GetCloneReceiptRuleSetHeaders extends SpeakeasyBase {
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


export class GetCloneReceiptRuleSetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCloneReceiptRuleSetQueryParams;

  @Metadata()
  headers: GetCloneReceiptRuleSetHeaders;
}


export class GetCloneReceiptRuleSetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
