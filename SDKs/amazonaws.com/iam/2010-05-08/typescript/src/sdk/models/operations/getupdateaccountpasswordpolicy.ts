import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateAccountPasswordPolicyActionEnum {
    UpdateAccountPasswordPolicy = "UpdateAccountPasswordPolicy"
}

export enum GetUpdateAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateAccountPasswordPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateAccountPasswordPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllowUsersToChangePassword" })
  allowUsersToChangePassword?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HardExpiry" })
  hardExpiry?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxPasswordAge" })
  maxPasswordAge?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MinimumPasswordLength" })
  minimumPasswordLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PasswordReusePrevention" })
  passwordReusePrevention?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RequireLowercaseCharacters" })
  requireLowercaseCharacters?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RequireNumbers" })
  requireNumbers?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RequireSymbols" })
  requireSymbols?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RequireUppercaseCharacters" })
  requireUppercaseCharacters?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateAccountPasswordPolicyVersionEnum;
}


export class GetUpdateAccountPasswordPolicyHeaders extends SpeakeasyBase {
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


export class GetUpdateAccountPasswordPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateAccountPasswordPolicyQueryParams;

  @Metadata()
  headers: GetUpdateAccountPasswordPolicyHeaders;
}


export class GetUpdateAccountPasswordPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
