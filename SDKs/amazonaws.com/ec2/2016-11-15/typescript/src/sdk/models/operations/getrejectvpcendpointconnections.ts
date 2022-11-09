import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRejectVpcEndpointConnectionsActionEnum {
    RejectVpcEndpointConnections = "RejectVpcEndpointConnections"
}

export enum GetRejectVpcEndpointConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRejectVpcEndpointConnectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRejectVpcEndpointConnectionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRejectVpcEndpointConnectionsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId: string[];
}


export class GetRejectVpcEndpointConnectionsHeaders extends SpeakeasyBase {
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


export class GetRejectVpcEndpointConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRejectVpcEndpointConnectionsQueryParams;

  @Metadata()
  headers: GetRejectVpcEndpointConnectionsHeaders;
}


export class GetRejectVpcEndpointConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
