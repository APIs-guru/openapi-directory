import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListAvailableSolutionStacksActionEnum {
    ListAvailableSolutionStacks = "ListAvailableSolutionStacks"
}

export enum GetListAvailableSolutionStacksVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListAvailableSolutionStacksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListAvailableSolutionStacksActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListAvailableSolutionStacksVersionEnum;
}


export class GetListAvailableSolutionStacksHeaders extends SpeakeasyBase {
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


export class GetListAvailableSolutionStacksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListAvailableSolutionStacksQueryParams;

  @Metadata()
  headers: GetListAvailableSolutionStacksHeaders;
}


export class GetListAvailableSolutionStacksResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
