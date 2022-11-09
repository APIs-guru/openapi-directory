import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCancelReservedInstancesListingActionEnum {
    CancelReservedInstancesListing = "CancelReservedInstancesListing"
}

export enum GetCancelReservedInstancesListingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCancelReservedInstancesListingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelReservedInstancesListingActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedInstancesListingId" })
  reservedInstancesListingId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelReservedInstancesListingVersionEnum;
}


export class GetCancelReservedInstancesListingHeaders extends SpeakeasyBase {
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


export class GetCancelReservedInstancesListingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCancelReservedInstancesListingQueryParams;

  @Metadata()
  headers: GetCancelReservedInstancesListingHeaders;
}


export class GetCancelReservedInstancesListingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
