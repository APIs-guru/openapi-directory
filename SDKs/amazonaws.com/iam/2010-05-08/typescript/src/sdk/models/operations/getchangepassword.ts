import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetChangePasswordActionEnum {
    ChangePassword = "ChangePassword"
}

export enum GetChangePasswordVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetChangePasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetChangePasswordActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewPassword" })
  newPassword: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OldPassword" })
  oldPassword: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetChangePasswordVersionEnum;
}


export class GetChangePasswordHeaders extends SpeakeasyBase {
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


export class GetChangePasswordRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChangePasswordQueryParams;

  @Metadata()
  headers: GetChangePasswordHeaders;
}


export class GetChangePasswordResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
