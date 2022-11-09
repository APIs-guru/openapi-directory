import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutGroupPolicyActionEnum {
    PutGroupPolicy = "PutGroupPolicy"
}

export enum GetPutGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetPutGroupPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutGroupPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" })
  policyDocument: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutGroupPolicyVersionEnum;
}


export class GetPutGroupPolicyHeaders extends SpeakeasyBase {
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


export class GetPutGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutGroupPolicyQueryParams;

  @Metadata()
  headers: GetPutGroupPolicyHeaders;
}


export class GetPutGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
