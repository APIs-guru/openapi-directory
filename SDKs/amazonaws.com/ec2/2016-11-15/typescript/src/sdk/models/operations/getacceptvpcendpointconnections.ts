import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAcceptVpcEndpointConnectionsActionEnum {
    AcceptVpcEndpointConnections = "AcceptVpcEndpointConnections"
}

export enum GetAcceptVpcEndpointConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAcceptVpcEndpointConnectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAcceptVpcEndpointConnectionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAcceptVpcEndpointConnectionsVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId: string[];
}


export class GetAcceptVpcEndpointConnectionsHeaders extends SpeakeasyBase {
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


export class GetAcceptVpcEndpointConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAcceptVpcEndpointConnectionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAcceptVpcEndpointConnectionsHeaders;
}


export class GetAcceptVpcEndpointConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
