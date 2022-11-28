import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteReceiptFilterActionEnum {
    DeleteReceiptFilter = "DeleteReceiptFilter"
}

export enum GetDeleteReceiptFilterVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteReceiptFilterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteReceiptFilterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FilterName" })
  filterName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteReceiptFilterVersionEnum;
}


export class GetDeleteReceiptFilterHeaders extends SpeakeasyBase {
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


export class GetDeleteReceiptFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteReceiptFilterQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteReceiptFilterHeaders;
}


export class GetDeleteReceiptFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
