import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetVerifyEmailIdentityActionEnum {
    VerifyEmailIdentity = "VerifyEmailIdentity"
}

export enum GetVerifyEmailIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetVerifyEmailIdentityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetVerifyEmailIdentityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetVerifyEmailIdentityVersionEnum;
}


export class GetVerifyEmailIdentityHeaders extends SpeakeasyBase {
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


export class GetVerifyEmailIdentityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVerifyEmailIdentityQueryParams;

  @Metadata()
  headers: GetVerifyEmailIdentityHeaders;
}


export class GetVerifyEmailIdentityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
