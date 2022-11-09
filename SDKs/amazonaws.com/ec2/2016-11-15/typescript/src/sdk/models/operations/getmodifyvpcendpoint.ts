import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyVpcEndpointActionEnum {
    ModifyVpcEndpoint = "ModifyVpcEndpoint"
}

export enum GetModifyVpcEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcEndpointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcEndpointActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AddRouteTableId" })
  addRouteTableId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=AddSecurityGroupId" })
  addSecurityGroupId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=AddSubnetId" })
  addSubnetId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" })
  policyDocument?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrivateDnsEnabled" })
  privateDnsEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveRouteTableId" })
  removeRouteTableId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveSecurityGroupId" })
  removeSecurityGroupId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveSubnetId" })
  removeSubnetId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResetPolicy" })
  resetPolicy?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcEndpointVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId: string;
}


export class GetModifyVpcEndpointHeaders extends SpeakeasyBase {
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


export class GetModifyVpcEndpointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVpcEndpointQueryParams;

  @Metadata()
  headers: GetModifyVpcEndpointHeaders;
}


export class GetModifyVpcEndpointResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
