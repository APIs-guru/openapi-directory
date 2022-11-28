import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAssociateVpcCidrBlockActionEnum {
    AssociateVpcCidrBlock = "AssociateVpcCidrBlock"
}

export enum PostAssociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostAssociateVpcCidrBlockQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssociateVpcCidrBlockActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssociateVpcCidrBlockVersionEnum;
}


export class PostAssociateVpcCidrBlockHeaders extends SpeakeasyBase {
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


export class PostAssociateVpcCidrBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAssociateVpcCidrBlockQueryParams;

  @SpeakeasyMetadata()
  headers: PostAssociateVpcCidrBlockHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssociateVpcCidrBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
