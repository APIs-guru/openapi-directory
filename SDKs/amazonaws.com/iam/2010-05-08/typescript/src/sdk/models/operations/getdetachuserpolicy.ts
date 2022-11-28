import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDetachUserPolicyActionEnum {
    DetachUserPolicy = "DetachUserPolicy"
}

export enum GetDetachUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDetachUserPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachUserPolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachUserPolicyVersionEnum;
}


export class GetDetachUserPolicyHeaders extends SpeakeasyBase {
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


export class GetDetachUserPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDetachUserPolicyQueryParams;

  @SpeakeasyMetadata()
  headers: GetDetachUserPolicyHeaders;
}


export class GetDetachUserPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
