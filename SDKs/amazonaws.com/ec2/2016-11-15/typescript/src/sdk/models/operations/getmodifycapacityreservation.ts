import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyCapacityReservationActionEnum {
    ModifyCapacityReservation = "ModifyCapacityReservation"
}

export enum GetModifyCapacityReservationEndDateTypeEnum {
    Unlimited = "unlimited",
    Limited = "limited"
}

export enum GetModifyCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyCapacityReservationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Accept" })
  accept?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyCapacityReservationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CapacityReservationId" })
  capacityReservationId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDateType" })
  endDateType?: GetModifyCapacityReservationEndDateTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceCount" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyCapacityReservationVersionEnum;
}


export class GetModifyCapacityReservationHeaders extends SpeakeasyBase {
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


export class GetModifyCapacityReservationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyCapacityReservationQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyCapacityReservationHeaders;
}


export class GetModifyCapacityReservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
