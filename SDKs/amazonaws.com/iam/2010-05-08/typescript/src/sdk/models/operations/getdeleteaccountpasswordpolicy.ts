import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteAccountPasswordPolicyActionEnum {
    DeleteAccountPasswordPolicy = "DeleteAccountPasswordPolicy"
}

export enum GetDeleteAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteAccountPasswordPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteAccountPasswordPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteAccountPasswordPolicyVersionEnum;
}


export class GetDeleteAccountPasswordPolicyHeaders extends SpeakeasyBase {
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


export class GetDeleteAccountPasswordPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteAccountPasswordPolicyQueryParams;

  @Metadata()
  headers: GetDeleteAccountPasswordPolicyHeaders;
}


export class GetDeleteAccountPasswordPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
