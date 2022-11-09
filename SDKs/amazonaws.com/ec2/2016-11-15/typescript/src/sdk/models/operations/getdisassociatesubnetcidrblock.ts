import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisassociateSubnetCidrBlockActionEnum {
    DisassociateSubnetCidrBlock = "DisassociateSubnetCidrBlock"
}

export enum GetDisassociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisassociateSubnetCidrBlockQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateSubnetCidrBlockActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateSubnetCidrBlockVersionEnum;
}


export class GetDisassociateSubnetCidrBlockHeaders extends SpeakeasyBase {
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


export class GetDisassociateSubnetCidrBlockRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisassociateSubnetCidrBlockQueryParams;

  @Metadata()
  headers: GetDisassociateSubnetCidrBlockHeaders;
}


export class GetDisassociateSubnetCidrBlockResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
