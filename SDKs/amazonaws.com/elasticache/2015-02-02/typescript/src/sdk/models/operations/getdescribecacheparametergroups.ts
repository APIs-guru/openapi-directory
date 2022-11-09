import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeCacheParameterGroupsActionEnum {
    DescribeCacheParameterGroups = "DescribeCacheParameterGroups"
}

export enum GetDescribeCacheParameterGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeCacheParameterGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeCacheParameterGroupsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupName" })
  cacheParameterGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeCacheParameterGroupsVersionEnum;
}


export class GetDescribeCacheParameterGroupsHeaders extends SpeakeasyBase {
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


export class GetDescribeCacheParameterGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeCacheParameterGroupsQueryParams;

  @Metadata()
  headers: GetDescribeCacheParameterGroupsHeaders;
}


export class GetDescribeCacheParameterGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
