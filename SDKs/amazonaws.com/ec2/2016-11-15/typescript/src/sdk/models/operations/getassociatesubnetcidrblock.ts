import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssociateSubnetCidrBlockActionEnum {
    AssociateSubnetCidrBlock = "AssociateSubnetCidrBlock"
}

export enum GetAssociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateSubnetCidrBlockQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateSubnetCidrBlockActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" })
  ipv6CidrBlock: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubnetId" })
  subnetId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateSubnetCidrBlockVersionEnum;
}


export class GetAssociateSubnetCidrBlockHeaders extends SpeakeasyBase {
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


export class GetAssociateSubnetCidrBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociateSubnetCidrBlockQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssociateSubnetCidrBlockHeaders;
}


export class GetAssociateSubnetCidrBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
