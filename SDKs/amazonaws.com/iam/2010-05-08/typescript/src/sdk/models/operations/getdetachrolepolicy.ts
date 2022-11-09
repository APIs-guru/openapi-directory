import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDetachRolePolicyActionEnum {
    DetachRolePolicy = "DetachRolePolicy"
}

export enum GetDetachRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDetachRolePolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachRolePolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachRolePolicyVersionEnum;
}


export class GetDetachRolePolicyHeaders extends SpeakeasyBase {
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


export class GetDetachRolePolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDetachRolePolicyQueryParams;

  @Metadata()
  headers: GetDetachRolePolicyHeaders;
}


export class GetDetachRolePolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
