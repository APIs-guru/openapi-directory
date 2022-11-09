import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeCacheEngineVersionsActionEnum {
    DescribeCacheEngineVersions = "DescribeCacheEngineVersions"
}

export enum GetDescribeCacheEngineVersionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeCacheEngineVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeCacheEngineVersionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupFamily" })
  cacheParameterGroupFamily?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DefaultOnly" })
  defaultOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeCacheEngineVersionsVersionEnum;
}


export class GetDescribeCacheEngineVersionsHeaders extends SpeakeasyBase {
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


export class GetDescribeCacheEngineVersionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeCacheEngineVersionsQueryParams;

  @Metadata()
  headers: GetDescribeCacheEngineVersionsHeaders;
}


export class GetDescribeCacheEngineVersionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
