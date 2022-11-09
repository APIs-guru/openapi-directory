import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetGroupPolicyActionEnum {
    GetGroupPolicy = "GetGroupPolicy"
}

export enum GetGetGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetGroupPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetGroupPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetGroupPolicyVersionEnum;
}


export class GetGetGroupPolicyHeaders extends SpeakeasyBase {
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


export class GetGetGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetGroupPolicyQueryParams;

  @Metadata()
  headers: GetGetGroupPolicyHeaders;
}


export class GetGetGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
