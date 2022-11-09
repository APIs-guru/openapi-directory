import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetContextKeysForPrincipalPolicyActionEnum {
    GetContextKeysForPrincipalPolicy = "GetContextKeysForPrincipalPolicy"
}

export enum GetGetContextKeysForPrincipalPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetContextKeysForPrincipalPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetContextKeysForPrincipalPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyInputList" })
  policyInputList?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicySourceArn" })
  policySourceArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetContextKeysForPrincipalPolicyVersionEnum;
}


export class GetGetContextKeysForPrincipalPolicyHeaders extends SpeakeasyBase {
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


export class GetGetContextKeysForPrincipalPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetContextKeysForPrincipalPolicyQueryParams;

  @Metadata()
  headers: GetGetContextKeysForPrincipalPolicyHeaders;
}


export class GetGetContextKeysForPrincipalPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
