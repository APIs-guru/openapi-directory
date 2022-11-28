import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisassociateIamInstanceProfileActionEnum {
    DisassociateIamInstanceProfile = "DisassociateIamInstanceProfile"
}

export enum GetDisassociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisassociateIamInstanceProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateIamInstanceProfileActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateIamInstanceProfileVersionEnum;
}


export class GetDisassociateIamInstanceProfileHeaders extends SpeakeasyBase {
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


export class GetDisassociateIamInstanceProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisassociateIamInstanceProfileQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisassociateIamInstanceProfileHeaders;
}


export class GetDisassociateIamInstanceProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
