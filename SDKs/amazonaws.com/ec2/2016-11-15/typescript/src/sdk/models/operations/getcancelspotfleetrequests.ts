import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCancelSpotFleetRequestsActionEnum {
    CancelSpotFleetRequests = "CancelSpotFleetRequests"
}

export enum GetCancelSpotFleetRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCancelSpotFleetRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelSpotFleetRequestsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SpotFleetRequestId" })
  spotFleetRequestId: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TerminateInstances" })
  terminateInstances: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelSpotFleetRequestsVersionEnum;
}


export class GetCancelSpotFleetRequestsHeaders extends SpeakeasyBase {
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


export class GetCancelSpotFleetRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCancelSpotFleetRequestsQueryParams;

  @SpeakeasyMetadata()
  headers: GetCancelSpotFleetRequestsHeaders;
}


export class GetCancelSpotFleetRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
