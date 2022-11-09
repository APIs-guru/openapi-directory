import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateAssumeRolePolicyActionEnum {
    UpdateAssumeRolePolicy = "UpdateAssumeRolePolicy"
}

export enum GetUpdateAssumeRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateAssumeRolePolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateAssumeRolePolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" })
  policyDocument: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateAssumeRolePolicyVersionEnum;
}


export class GetUpdateAssumeRolePolicyHeaders extends SpeakeasyBase {
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


export class GetUpdateAssumeRolePolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateAssumeRolePolicyQueryParams;

  @Metadata()
  headers: GetUpdateAssumeRolePolicyHeaders;
}


export class GetUpdateAssumeRolePolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
