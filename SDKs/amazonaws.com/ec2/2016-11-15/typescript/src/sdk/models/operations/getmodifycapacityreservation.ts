import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyCapacityReservationActionEnum {
    ModifyCapacityReservation = "ModifyCapacityReservation"
}

export enum GetModifyCapacityReservationEndDateTypeEnum {
    Unlimited = "unlimited"
,    Limited = "limited"
}

export enum GetModifyCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyCapacityReservationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Accept" })
  accept?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyCapacityReservationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CapacityReservationId" })
  capacityReservationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDateType" })
  endDateType?: GetModifyCapacityReservationEndDateTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceCount" })
  instanceCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyCapacityReservationVersionEnum;
}


export class GetModifyCapacityReservationHeaders extends SpeakeasyBase {
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


export class GetModifyCapacityReservationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyCapacityReservationQueryParams;

  @Metadata()
  headers: GetModifyCapacityReservationHeaders;
}


export class GetModifyCapacityReservationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
