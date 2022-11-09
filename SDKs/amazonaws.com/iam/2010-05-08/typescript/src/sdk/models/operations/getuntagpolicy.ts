import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUntagPolicyActionEnum {
    UntagPolicy = "UntagPolicy"
}

export enum GetUntagPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUntagPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagPolicyVersionEnum;
}


export class GetUntagPolicyHeaders extends SpeakeasyBase {
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


export class GetUntagPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUntagPolicyQueryParams;

  @Metadata()
  headers: GetUntagPolicyHeaders;
}


export class GetUntagPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
