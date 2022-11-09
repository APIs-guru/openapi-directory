import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteReceiptFilterActionEnum {
    DeleteReceiptFilter = "DeleteReceiptFilter"
}

export enum GetDeleteReceiptFilterVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteReceiptFilterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteReceiptFilterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FilterName" })
  filterName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteReceiptFilterVersionEnum;
}


export class GetDeleteReceiptFilterHeaders extends SpeakeasyBase {
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


export class GetDeleteReceiptFilterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteReceiptFilterQueryParams;

  @Metadata()
  headers: GetDeleteReceiptFilterHeaders;
}


export class GetDeleteReceiptFilterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
