import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCancelSpotFleetRequestsActionEnum {
    CancelSpotFleetRequests = "CancelSpotFleetRequests"
}

export enum GetCancelSpotFleetRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCancelSpotFleetRequestsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelSpotFleetRequestsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SpotFleetRequestId" })
  spotFleetRequestId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TerminateInstances" })
  terminateInstances: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelSpotFleetRequestsVersionEnum;
}


export class GetCancelSpotFleetRequestsHeaders extends SpeakeasyBase {
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


export class GetCancelSpotFleetRequestsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCancelSpotFleetRequestsQueryParams;

  @Metadata()
  headers: GetCancelSpotFleetRequestsHeaders;
}


export class GetCancelSpotFleetRequestsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
