import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateSubnetCidrBlockActionEnum {
    AssociateSubnetCidrBlock = "AssociateSubnetCidrBlock"
}

export enum GetAssociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateSubnetCidrBlockQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateSubnetCidrBlockActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" })
  ipv6CidrBlock: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetId" })
  subnetId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateSubnetCidrBlockVersionEnum;
}


export class GetAssociateSubnetCidrBlockHeaders extends SpeakeasyBase {
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


export class GetAssociateSubnetCidrBlockRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateSubnetCidrBlockQueryParams;

  @Metadata()
  headers: GetAssociateSubnetCidrBlockHeaders;
}


export class GetAssociateSubnetCidrBlockResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
