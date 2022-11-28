import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetAccountPasswordPolicyActionEnum {
    GetAccountPasswordPolicy = "GetAccountPasswordPolicy"
}

export enum GetGetAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetAccountPasswordPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAccountPasswordPolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAccountPasswordPolicyVersionEnum;
}


export class GetGetAccountPasswordPolicyHeaders extends SpeakeasyBase {
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


export class GetGetAccountPasswordPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetAccountPasswordPolicyQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetAccountPasswordPolicyHeaders;
}


export class GetGetAccountPasswordPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
