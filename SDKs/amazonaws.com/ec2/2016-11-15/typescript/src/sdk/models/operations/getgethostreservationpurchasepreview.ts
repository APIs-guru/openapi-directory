import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetHostReservationPurchasePreviewActionEnum {
    GetHostReservationPurchasePreview = "GetHostReservationPurchasePreview"
}

export enum GetGetHostReservationPurchasePreviewVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetHostReservationPurchasePreviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetHostReservationPurchasePreviewActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HostIdSet" })
  hostIdSet: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=OfferingId" })
  offeringId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetHostReservationPurchasePreviewVersionEnum;
}


export class GetGetHostReservationPurchasePreviewHeaders extends SpeakeasyBase {
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


export class GetGetHostReservationPurchasePreviewRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetHostReservationPurchasePreviewQueryParams;

  @Metadata()
  headers: GetGetHostReservationPurchasePreviewHeaders;
}


export class GetGetHostReservationPurchasePreviewResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
