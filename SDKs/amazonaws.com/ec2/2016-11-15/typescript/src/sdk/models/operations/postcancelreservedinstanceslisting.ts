import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostCancelReservedInstancesListingActionEnum {
    CancelReservedInstancesListing = "CancelReservedInstancesListing"
}

export enum PostCancelReservedInstancesListingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostCancelReservedInstancesListingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCancelReservedInstancesListingActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCancelReservedInstancesListingVersionEnum;
}


export class PostCancelReservedInstancesListingHeaders extends SpeakeasyBase {
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


export class PostCancelReservedInstancesListingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCancelReservedInstancesListingQueryParams;

  @SpeakeasyMetadata()
  headers: PostCancelReservedInstancesListingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCancelReservedInstancesListingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
