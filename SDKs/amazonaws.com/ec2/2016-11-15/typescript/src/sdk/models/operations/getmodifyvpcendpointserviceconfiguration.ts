import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyVpcEndpointServiceConfigurationActionEnum {
    ModifyVpcEndpointServiceConfiguration = "ModifyVpcEndpointServiceConfiguration"
}

export enum GetModifyVpcEndpointServiceConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcEndpointServiceConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AcceptanceRequired" })
  acceptanceRequired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcEndpointServiceConfigurationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AddGatewayLoadBalancerArn" })
  addGatewayLoadBalancerArn?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=AddNetworkLoadBalancerArn" })
  addNetworkLoadBalancerArn?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrivateDnsName" })
  privateDnsName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveGatewayLoadBalancerArn" })
  removeGatewayLoadBalancerArn?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveNetworkLoadBalancerArn" })
  removeNetworkLoadBalancerArn?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemovePrivateDnsName" })
  removePrivateDnsName?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcEndpointServiceConfigurationVersionEnum;
}


export class GetModifyVpcEndpointServiceConfigurationHeaders extends SpeakeasyBase {
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


export class GetModifyVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVpcEndpointServiceConfigurationQueryParams;

  @Metadata()
  headers: GetModifyVpcEndpointServiceConfigurationHeaders;
}


export class GetModifyVpcEndpointServiceConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
