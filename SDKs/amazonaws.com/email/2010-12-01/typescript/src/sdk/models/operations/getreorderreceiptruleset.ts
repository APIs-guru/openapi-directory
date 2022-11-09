import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetReorderReceiptRuleSetActionEnum {
    ReorderReceiptRuleSet = "ReorderReceiptRuleSet"
}

export enum GetReorderReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetReorderReceiptRuleSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReorderReceiptRuleSetActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleNames" })
  ruleNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleSetName" })
  ruleSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReorderReceiptRuleSetVersionEnum;
}


export class GetReorderReceiptRuleSetHeaders extends SpeakeasyBase {
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


export class GetReorderReceiptRuleSetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReorderReceiptRuleSetQueryParams;

  @Metadata()
  headers: GetReorderReceiptRuleSetHeaders;
}


export class GetReorderReceiptRuleSetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
