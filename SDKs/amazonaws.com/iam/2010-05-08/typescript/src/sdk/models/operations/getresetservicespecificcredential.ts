import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetResetServiceSpecificCredentialActionEnum {
    ResetServiceSpecificCredential = "ResetServiceSpecificCredential"
}

export enum GetResetServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetResetServiceSpecificCredentialQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetServiceSpecificCredentialActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceSpecificCredentialId" })
  serviceSpecificCredentialId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetServiceSpecificCredentialVersionEnum;
}


export class GetResetServiceSpecificCredentialHeaders extends SpeakeasyBase {
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


export class GetResetServiceSpecificCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResetServiceSpecificCredentialQueryParams;

  @SpeakeasyMetadata()
  headers: GetResetServiceSpecificCredentialHeaders;
}


export class GetResetServiceSpecificCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
