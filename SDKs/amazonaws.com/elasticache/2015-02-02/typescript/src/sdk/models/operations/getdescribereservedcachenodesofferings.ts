import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeReservedCacheNodesOfferingsActionEnum {
    DescribeReservedCacheNodesOfferings = "DescribeReservedCacheNodesOfferings"
}

export enum GetDescribeReservedCacheNodesOfferingsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeReservedCacheNodesOfferingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeReservedCacheNodesOfferingsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheNodeType" })
  cacheNodeType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Duration" })
  duration?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OfferingType" })
  offeringType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ProductDescription" })
  productDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedCacheNodesOfferingId" })
  reservedCacheNodesOfferingId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeReservedCacheNodesOfferingsVersionEnum;
}


export class GetDescribeReservedCacheNodesOfferingsHeaders extends SpeakeasyBase {
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


export class GetDescribeReservedCacheNodesOfferingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeReservedCacheNodesOfferingsQueryParams;

  @Metadata()
  headers: GetDescribeReservedCacheNodesOfferingsHeaders;
}


export class GetDescribeReservedCacheNodesOfferingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
