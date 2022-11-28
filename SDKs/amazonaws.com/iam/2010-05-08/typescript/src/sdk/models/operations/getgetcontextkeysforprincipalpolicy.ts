import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetContextKeysForPrincipalPolicyActionEnum {
    GetContextKeysForPrincipalPolicy = "GetContextKeysForPrincipalPolicy"
}

export enum GetGetContextKeysForPrincipalPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetContextKeysForPrincipalPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetContextKeysForPrincipalPolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyInputList" })
  policyInputList?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicySourceArn" })
  policySourceArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetContextKeysForPrincipalPolicyVersionEnum;
}


export class GetGetContextKeysForPrincipalPolicyHeaders extends SpeakeasyBase {
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


export class GetGetContextKeysForPrincipalPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetContextKeysForPrincipalPolicyQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetContextKeysForPrincipalPolicyHeaders;
}


export class GetGetContextKeysForPrincipalPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
