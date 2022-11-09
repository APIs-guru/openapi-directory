import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetGroupsForCapacityReservationActionEnum {
    GetGroupsForCapacityReservation = "GetGroupsForCapacityReservation"
}

export enum GetGetGroupsForCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetGroupsForCapacityReservationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetGroupsForCapacityReservationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CapacityReservationId" })
  capacityReservationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetGroupsForCapacityReservationVersionEnum;
}


export class GetGetGroupsForCapacityReservationHeaders extends SpeakeasyBase {
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


export class GetGetGroupsForCapacityReservationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetGroupsForCapacityReservationQueryParams;

  @Metadata()
  headers: GetGetGroupsForCapacityReservationHeaders;
}


export class GetGetGroupsForCapacityReservationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
