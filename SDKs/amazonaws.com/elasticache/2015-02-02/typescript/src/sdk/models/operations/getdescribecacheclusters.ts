import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeCacheClustersActionEnum {
    DescribeCacheClusters = "DescribeCacheClusters"
}

export enum GetDescribeCacheClustersVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeCacheClustersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeCacheClustersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShowCacheClustersNotInReplicationGroups" })
  showCacheClustersNotInReplicationGroups?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShowCacheNodeInfo" })
  showCacheNodeInfo?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeCacheClustersVersionEnum;
}


export class GetDescribeCacheClustersHeaders extends SpeakeasyBase {
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


export class GetDescribeCacheClustersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeCacheClustersQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeCacheClustersHeaders;
}


export class GetDescribeCacheClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
