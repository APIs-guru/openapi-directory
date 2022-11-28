import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPutIdentityPolicyActionEnum {
    PutIdentityPolicy = "PutIdentityPolicy"
}

export enum GetPutIdentityPolicyVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetPutIdentityPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutIdentityPolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutIdentityPolicyVersionEnum;
}


export class GetPutIdentityPolicyHeaders extends SpeakeasyBase {
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


export class GetPutIdentityPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPutIdentityPolicyQueryParams;

  @SpeakeasyMetadata()
  headers: GetPutIdentityPolicyHeaders;
}


export class GetPutIdentityPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
