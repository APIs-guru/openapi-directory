import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListReceiptFiltersActionEnum {
    ListReceiptFilters = "ListReceiptFilters"
}

export enum GetListReceiptFiltersVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListReceiptFiltersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListReceiptFiltersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListReceiptFiltersVersionEnum;
}


export class GetListReceiptFiltersHeaders extends SpeakeasyBase {
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


export class GetListReceiptFiltersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListReceiptFiltersQueryParams;

  @SpeakeasyMetadata()
  headers: GetListReceiptFiltersHeaders;
}


export class GetListReceiptFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
