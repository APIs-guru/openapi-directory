import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutUserPolicyActionEnum {
    PutUserPolicy = "PutUserPolicy"
}

export enum GetPutUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetPutUserPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutUserPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" })
  policyDocument: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutUserPolicyVersionEnum;
}


export class GetPutUserPolicyHeaders extends SpeakeasyBase {
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


export class GetPutUserPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutUserPolicyQueryParams;

  @Metadata()
  headers: GetPutUserPolicyHeaders;
}


export class GetPutUserPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
