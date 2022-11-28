import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyVpcEndpointActionEnum {
    ModifyVpcEndpoint = "ModifyVpcEndpoint"
}

export enum GetModifyVpcEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcEndpointQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcEndpointActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddRouteTableId" })
  addRouteTableId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddSecurityGroupId" })
  addSecurityGroupId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddSubnetId" })
  addSubnetId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" })
  policyDocument?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrivateDnsEnabled" })
  privateDnsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveRouteTableId" })
  removeRouteTableId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveSecurityGroupId" })
  removeSecurityGroupId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveSubnetId" })
  removeSubnetId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResetPolicy" })
  resetPolicy?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcEndpointVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId: string;
}


export class GetModifyVpcEndpointHeaders extends SpeakeasyBase {
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


export class GetModifyVpcEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyVpcEndpointQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyVpcEndpointHeaders;
}


export class GetModifyVpcEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
