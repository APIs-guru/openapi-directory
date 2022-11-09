import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAttachRolePolicyActionEnum {
    AttachRolePolicy = "AttachRolePolicy"
}

export enum GetAttachRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetAttachRolePolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAttachRolePolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAttachRolePolicyVersionEnum;
}


export class GetAttachRolePolicyHeaders extends SpeakeasyBase {
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


export class GetAttachRolePolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAttachRolePolicyQueryParams;

  @Metadata()
  headers: GetAttachRolePolicyHeaders;
}


export class GetAttachRolePolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
