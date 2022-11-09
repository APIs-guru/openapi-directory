import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeCacheSubnetGroupsActionEnum {
    DescribeCacheSubnetGroups = "DescribeCacheSubnetGroups"
}

export enum GetDescribeCacheSubnetGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeCacheSubnetGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeCacheSubnetGroupsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheSubnetGroupName" })
  cacheSubnetGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeCacheSubnetGroupsVersionEnum;
}


export class GetDescribeCacheSubnetGroupsHeaders extends SpeakeasyBase {
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


export class GetDescribeCacheSubnetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeCacheSubnetGroupsQueryParams;

  @Metadata()
  headers: GetDescribeCacheSubnetGroupsHeaders;
}


export class GetDescribeCacheSubnetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
