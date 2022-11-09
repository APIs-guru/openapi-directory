import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutIdentityPolicyActionEnum {
    PutIdentityPolicy = "PutIdentityPolicy"
}

export enum GetPutIdentityPolicyVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetPutIdentityPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutIdentityPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Policy" })
  policy: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutIdentityPolicyVersionEnum;
}


export class GetPutIdentityPolicyHeaders extends SpeakeasyBase {
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


export class GetPutIdentityPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutIdentityPolicyQueryParams;

  @Metadata()
  headers: GetPutIdentityPolicyHeaders;
}


export class GetPutIdentityPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
