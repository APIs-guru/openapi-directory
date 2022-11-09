import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteVpcEndpointsActionEnum {
    DeleteVpcEndpoints = "DeleteVpcEndpoints"
}

export enum GetDeleteVpcEndpointsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteVpcEndpointsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVpcEndpointsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVpcEndpointsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId: string[];
}


export class GetDeleteVpcEndpointsHeaders extends SpeakeasyBase {
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


export class GetDeleteVpcEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteVpcEndpointsQueryParams;

  @Metadata()
  headers: GetDeleteVpcEndpointsHeaders;
}


export class GetDeleteVpcEndpointsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
