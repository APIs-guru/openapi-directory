import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeCacheSecurityGroupsActionEnum {
    DescribeCacheSecurityGroups = "DescribeCacheSecurityGroups"
}

export enum GetDescribeCacheSecurityGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeCacheSecurityGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeCacheSecurityGroupsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheSecurityGroupName" })
  cacheSecurityGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeCacheSecurityGroupsVersionEnum;
}


export class GetDescribeCacheSecurityGroupsHeaders extends SpeakeasyBase {
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


export class GetDescribeCacheSecurityGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeCacheSecurityGroupsQueryParams;

  @Metadata()
  headers: GetDescribeCacheSecurityGroupsHeaders;
}


export class GetDescribeCacheSecurityGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
