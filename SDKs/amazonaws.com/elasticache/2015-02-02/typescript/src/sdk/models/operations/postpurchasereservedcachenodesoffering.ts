import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPurchaseReservedCacheNodesOfferingActionEnum {
    PurchaseReservedCacheNodesOffering = "PurchaseReservedCacheNodesOffering"
}

export enum PostPurchaseReservedCacheNodesOfferingVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class PostPurchaseReservedCacheNodesOfferingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPurchaseReservedCacheNodesOfferingActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPurchaseReservedCacheNodesOfferingVersionEnum;
}


export class PostPurchaseReservedCacheNodesOfferingHeaders extends SpeakeasyBase {
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


export class PostPurchaseReservedCacheNodesOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPurchaseReservedCacheNodesOfferingQueryParams;

  @SpeakeasyMetadata()
  headers: PostPurchaseReservedCacheNodesOfferingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPurchaseReservedCacheNodesOfferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
