import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetChangePasswordActionEnum {
    ChangePassword = "ChangePassword"
}

export enum GetChangePasswordVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetChangePasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetChangePasswordActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewPassword" })
  newPassword: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OldPassword" })
  oldPassword: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetChangePasswordVersionEnum;
}


export class GetChangePasswordHeaders extends SpeakeasyBase {
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


export class GetChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChangePasswordQueryParams;

  @SpeakeasyMetadata()
  headers: GetChangePasswordHeaders;
}


export class GetChangePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
