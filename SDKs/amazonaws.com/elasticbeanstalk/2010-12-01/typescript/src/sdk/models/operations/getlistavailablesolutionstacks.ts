import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListAvailableSolutionStacksActionEnum {
    ListAvailableSolutionStacks = "ListAvailableSolutionStacks"
}

export enum GetListAvailableSolutionStacksVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListAvailableSolutionStacksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListAvailableSolutionStacksActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListAvailableSolutionStacksVersionEnum;
}


export class GetListAvailableSolutionStacksHeaders extends SpeakeasyBase {
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


export class GetListAvailableSolutionStacksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListAvailableSolutionStacksQueryParams;

  @SpeakeasyMetadata()
  headers: GetListAvailableSolutionStacksHeaders;
}


export class GetListAvailableSolutionStacksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
