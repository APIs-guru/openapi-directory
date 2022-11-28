import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteServiceSpecificCredentialActionEnum {
    DeleteServiceSpecificCredential = "DeleteServiceSpecificCredential"
}

export enum GetDeleteServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteServiceSpecificCredentialQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteServiceSpecificCredentialActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceSpecificCredentialId" })
  serviceSpecificCredentialId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteServiceSpecificCredentialVersionEnum;
}


export class GetDeleteServiceSpecificCredentialHeaders extends SpeakeasyBase {
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


export class GetDeleteServiceSpecificCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteServiceSpecificCredentialQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteServiceSpecificCredentialHeaders;
}


export class GetDeleteServiceSpecificCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
