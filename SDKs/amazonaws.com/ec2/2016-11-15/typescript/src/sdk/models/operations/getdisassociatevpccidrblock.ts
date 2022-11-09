import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisassociateVpcCidrBlockActionEnum {
    DisassociateVpcCidrBlock = "DisassociateVpcCidrBlock"
}

export enum GetDisassociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisassociateVpcCidrBlockQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateVpcCidrBlockActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateVpcCidrBlockVersionEnum;
}


export class GetDisassociateVpcCidrBlockHeaders extends SpeakeasyBase {
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


export class GetDisassociateVpcCidrBlockRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisassociateVpcCidrBlockQueryParams;

  @Metadata()
  headers: GetDisassociateVpcCidrBlockHeaders;
}


export class GetDisassociateVpcCidrBlockResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
