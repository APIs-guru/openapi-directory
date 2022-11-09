import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeReservedCacheNodesOfferingsActionEnum {
    DescribeReservedCacheNodesOfferings = "DescribeReservedCacheNodesOfferings"
}

export enum PostDescribeReservedCacheNodesOfferingsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class PostDescribeReservedCacheNodesOfferingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeReservedCacheNodesOfferingsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeReservedCacheNodesOfferingsVersionEnum;
}


export class PostDescribeReservedCacheNodesOfferingsHeaders extends SpeakeasyBase {
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


export class PostDescribeReservedCacheNodesOfferingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeReservedCacheNodesOfferingsQueryParams;

  @Metadata()
  headers: PostDescribeReservedCacheNodesOfferingsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeReservedCacheNodesOfferingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
