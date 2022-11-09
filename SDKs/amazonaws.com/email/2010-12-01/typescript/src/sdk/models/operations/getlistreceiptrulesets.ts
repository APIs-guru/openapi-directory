import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListReceiptRuleSetsActionEnum {
    ListReceiptRuleSets = "ListReceiptRuleSets"
}

export enum GetListReceiptRuleSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListReceiptRuleSetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListReceiptRuleSetsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListReceiptRuleSetsVersionEnum;
}


export class GetListReceiptRuleSetsHeaders extends SpeakeasyBase {
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


export class GetListReceiptRuleSetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListReceiptRuleSetsQueryParams;

  @Metadata()
  headers: GetListReceiptRuleSetsHeaders;
}


export class GetListReceiptRuleSetsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
