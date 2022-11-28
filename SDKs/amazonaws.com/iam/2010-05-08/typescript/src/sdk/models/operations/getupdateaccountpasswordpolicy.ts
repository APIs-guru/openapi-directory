import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateAccountPasswordPolicyActionEnum {
    UpdateAccountPasswordPolicy = "UpdateAccountPasswordPolicy"
}

export enum GetUpdateAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateAccountPasswordPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateAccountPasswordPolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowUsersToChangePassword" })
  allowUsersToChangePassword?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HardExpiry" })
  hardExpiry?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxPasswordAge" })
  maxPasswordAge?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MinimumPasswordLength" })
  minimumPasswordLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PasswordReusePrevention" })
  passwordReusePrevention?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequireLowercaseCharacters" })
  requireLowercaseCharacters?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequireNumbers" })
  requireNumbers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequireSymbols" })
  requireSymbols?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequireUppercaseCharacters" })
  requireUppercaseCharacters?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateAccountPasswordPolicyVersionEnum;
}


export class GetUpdateAccountPasswordPolicyHeaders extends SpeakeasyBase {
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


export class GetUpdateAccountPasswordPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateAccountPasswordPolicyQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateAccountPasswordPolicyHeaders;
}


export class GetUpdateAccountPasswordPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
