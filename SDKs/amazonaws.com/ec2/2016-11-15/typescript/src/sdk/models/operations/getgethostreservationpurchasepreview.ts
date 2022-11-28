import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetHostReservationPurchasePreviewActionEnum {
    GetHostReservationPurchasePreview = "GetHostReservationPurchasePreview"
}

export enum GetGetHostReservationPurchasePreviewVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetHostReservationPurchasePreviewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetHostReservationPurchasePreviewActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostIdSet" })
  hostIdSet: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OfferingId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetHostReservationPurchasePreviewVersionEnum;
}


export class GetGetHostReservationPurchasePreviewHeaders extends SpeakeasyBase {
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


export class GetGetHostReservationPurchasePreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetHostReservationPurchasePreviewQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetHostReservationPurchasePreviewHeaders;
}


export class GetGetHostReservationPurchasePreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
