import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateLoginProfileActionEnum {
    UpdateLoginProfile = "UpdateLoginProfile"
}

export enum GetUpdateLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateLoginProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateLoginProfileActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Password" })
  password?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PasswordResetRequired" })
  passwordResetRequired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateLoginProfileVersionEnum;
}


export class GetUpdateLoginProfileHeaders extends SpeakeasyBase {
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


export class GetUpdateLoginProfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateLoginProfileQueryParams;

  @Metadata()
  headers: GetUpdateLoginProfileHeaders;
}


export class GetUpdateLoginProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
