import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListInstanceProfilesActionEnum {
    ListInstanceProfiles = "ListInstanceProfiles"
}

export enum GetListInstanceProfilesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListInstanceProfilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListInstanceProfilesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" })
  pathPrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListInstanceProfilesVersionEnum;
}


export class GetListInstanceProfilesHeaders extends SpeakeasyBase {
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


export class GetListInstanceProfilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListInstanceProfilesQueryParams;

  @Metadata()
  headers: GetListInstanceProfilesHeaders;
}


export class GetListInstanceProfilesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
