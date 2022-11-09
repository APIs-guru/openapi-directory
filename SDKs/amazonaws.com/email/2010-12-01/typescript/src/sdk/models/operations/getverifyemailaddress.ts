import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetVerifyEmailAddressActionEnum {
    VerifyEmailAddress = "VerifyEmailAddress"
}

export enum GetVerifyEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetVerifyEmailAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetVerifyEmailAddressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetVerifyEmailAddressVersionEnum;
}


export class GetVerifyEmailAddressHeaders extends SpeakeasyBase {
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


export class GetVerifyEmailAddressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVerifyEmailAddressQueryParams;

  @Metadata()
  headers: GetVerifyEmailAddressHeaders;
}


export class GetVerifyEmailAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
