import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateVpcCidrBlockActionEnum {
    AssociateVpcCidrBlock = "AssociateVpcCidrBlock"
}

export enum GetAssociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateVpcCidrBlockQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateVpcCidrBlockActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AmazonProvidedIpv6CidrBlock" })
  amazonProvidedIpv6CidrBlock?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlockNetworkBorderGroup" })
  ipv6CidrBlockNetworkBorderGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6Pool" })
  ipv6Pool?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateVpcCidrBlockVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetAssociateVpcCidrBlockHeaders extends SpeakeasyBase {
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


export class GetAssociateVpcCidrBlockRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateVpcCidrBlockQueryParams;

  @Metadata()
  headers: GetAssociateVpcCidrBlockHeaders;
}


export class GetAssociateVpcCidrBlockResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
