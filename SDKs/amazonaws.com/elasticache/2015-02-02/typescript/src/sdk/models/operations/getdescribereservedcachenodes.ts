import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeReservedCacheNodesActionEnum {
    DescribeReservedCacheNodes = "DescribeReservedCacheNodes"
}

export enum GetDescribeReservedCacheNodesVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeReservedCacheNodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeReservedCacheNodesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheNodeType" })
  cacheNodeType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OfferingType" })
  offeringType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProductDescription" })
  productDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedCacheNodeId" })
  reservedCacheNodeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedCacheNodesOfferingId" })
  reservedCacheNodesOfferingId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeReservedCacheNodesVersionEnum;
}


export class GetDescribeReservedCacheNodesHeaders extends SpeakeasyBase {
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


export class GetDescribeReservedCacheNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeReservedCacheNodesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeReservedCacheNodesHeaders;
}


export class GetDescribeReservedCacheNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
