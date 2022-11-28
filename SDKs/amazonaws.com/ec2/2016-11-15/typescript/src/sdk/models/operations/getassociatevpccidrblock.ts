import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssociateVpcCidrBlockActionEnum {
    AssociateVpcCidrBlock = "AssociateVpcCidrBlock"
}

export enum GetAssociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateVpcCidrBlockQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateVpcCidrBlockActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AmazonProvidedIpv6CidrBlock" })
  amazonProvidedIpv6CidrBlock?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlockNetworkBorderGroup" })
  ipv6CidrBlockNetworkBorderGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Pool" })
  ipv6Pool?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateVpcCidrBlockVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetAssociateVpcCidrBlockHeaders extends SpeakeasyBase {
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


export class GetAssociateVpcCidrBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociateVpcCidrBlockQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssociateVpcCidrBlockHeaders;
}


export class GetAssociateVpcCidrBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
