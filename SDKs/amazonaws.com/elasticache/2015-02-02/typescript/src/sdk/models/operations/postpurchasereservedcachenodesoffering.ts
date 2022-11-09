import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostPurchaseReservedCacheNodesOfferingActionEnum {
    PurchaseReservedCacheNodesOffering = "PurchaseReservedCacheNodesOffering"
}

export enum PostPurchaseReservedCacheNodesOfferingVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class PostPurchaseReservedCacheNodesOfferingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPurchaseReservedCacheNodesOfferingActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPurchaseReservedCacheNodesOfferingVersionEnum;
}


export class PostPurchaseReservedCacheNodesOfferingHeaders extends SpeakeasyBase {
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


export class PostPurchaseReservedCacheNodesOfferingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPurchaseReservedCacheNodesOfferingQueryParams;

  @Metadata()
  headers: PostPurchaseReservedCacheNodesOfferingHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPurchaseReservedCacheNodesOfferingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
