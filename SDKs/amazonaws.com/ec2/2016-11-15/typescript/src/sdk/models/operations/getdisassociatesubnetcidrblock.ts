import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisassociateSubnetCidrBlockActionEnum {
    DisassociateSubnetCidrBlock = "DisassociateSubnetCidrBlock"
}

export enum GetDisassociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisassociateSubnetCidrBlockQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateSubnetCidrBlockActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateSubnetCidrBlockVersionEnum;
}


export class GetDisassociateSubnetCidrBlockHeaders extends SpeakeasyBase {
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


export class GetDisassociateSubnetCidrBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisassociateSubnetCidrBlockQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisassociateSubnetCidrBlockHeaders;
}


export class GetDisassociateSubnetCidrBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
