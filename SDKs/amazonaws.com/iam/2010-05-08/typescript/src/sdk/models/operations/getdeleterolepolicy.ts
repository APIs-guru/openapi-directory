import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteRolePolicyActionEnum {
    DeleteRolePolicy = "DeleteRolePolicy"
}

export enum GetDeleteRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteRolePolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteRolePolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteRolePolicyVersionEnum;
}


export class GetDeleteRolePolicyHeaders extends SpeakeasyBase {
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


export class GetDeleteRolePolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteRolePolicyQueryParams;

  @Metadata()
  headers: GetDeleteRolePolicyHeaders;
}


export class GetDeleteRolePolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
