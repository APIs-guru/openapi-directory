import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetContextKeysForCustomPolicyActionEnum {
    GetContextKeysForCustomPolicy = "GetContextKeysForCustomPolicy"
}

export enum GetGetContextKeysForCustomPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetContextKeysForCustomPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetContextKeysForCustomPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyInputList" })
  policyInputList: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetContextKeysForCustomPolicyVersionEnum;
}


export class GetGetContextKeysForCustomPolicyHeaders extends SpeakeasyBase {
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


export class GetGetContextKeysForCustomPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetContextKeysForCustomPolicyQueryParams;

  @Metadata()
  headers: GetGetContextKeysForCustomPolicyHeaders;
}


export class GetGetContextKeysForCustomPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
