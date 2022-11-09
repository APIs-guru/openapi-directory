import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAcceptVpcEndpointConnectionsActionEnum {
    AcceptVpcEndpointConnections = "AcceptVpcEndpointConnections"
}

export enum GetAcceptVpcEndpointConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAcceptVpcEndpointConnectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAcceptVpcEndpointConnectionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAcceptVpcEndpointConnectionsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId: string[];
}


export class GetAcceptVpcEndpointConnectionsHeaders extends SpeakeasyBase {
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


export class GetAcceptVpcEndpointConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAcceptVpcEndpointConnectionsQueryParams;

  @Metadata()
  headers: GetAcceptVpcEndpointConnectionsHeaders;
}


export class GetAcceptVpcEndpointConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
