import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyVpcEndpointServiceConfigurationActionEnum {
    ModifyVpcEndpointServiceConfiguration = "ModifyVpcEndpointServiceConfiguration"
}

export enum GetModifyVpcEndpointServiceConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcEndpointServiceConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AcceptanceRequired" })
  acceptanceRequired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcEndpointServiceConfigurationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddGatewayLoadBalancerArn" })
  addGatewayLoadBalancerArn?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddNetworkLoadBalancerArn" })
  addNetworkLoadBalancerArn?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrivateDnsName" })
  privateDnsName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveGatewayLoadBalancerArn" })
  removeGatewayLoadBalancerArn?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveNetworkLoadBalancerArn" })
  removeNetworkLoadBalancerArn?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemovePrivateDnsName" })
  removePrivateDnsName?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcEndpointServiceConfigurationVersionEnum;
}


export class GetModifyVpcEndpointServiceConfigurationHeaders extends SpeakeasyBase {
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


export class GetModifyVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyVpcEndpointServiceConfigurationQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyVpcEndpointServiceConfigurationHeaders;
}


export class GetModifyVpcEndpointServiceConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
