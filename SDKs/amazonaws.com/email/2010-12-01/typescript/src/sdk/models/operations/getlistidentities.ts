import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListIdentitiesActionEnum {
    ListIdentities = "ListIdentities"
}

export enum GetListIdentitiesIdentityTypeEnum {
    EmailAddress = "EmailAddress"
,    Domain = "Domain"
}

export enum GetListIdentitiesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListIdentitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListIdentitiesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IdentityType" })
  identityType?: GetListIdentitiesIdentityTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListIdentitiesVersionEnum;
}


export class GetListIdentitiesHeaders extends SpeakeasyBase {
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


export class GetListIdentitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListIdentitiesQueryParams;

  @Metadata()
  headers: GetListIdentitiesHeaders;
}


export class GetListIdentitiesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
