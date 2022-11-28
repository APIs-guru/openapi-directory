import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateAssumeRolePolicyActionEnum {
    UpdateAssumeRolePolicy = "UpdateAssumeRolePolicy"
}

export enum GetUpdateAssumeRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateAssumeRolePolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateAssumeRolePolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" })
  policyDocument: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateAssumeRolePolicyVersionEnum;
}


export class GetUpdateAssumeRolePolicyHeaders extends SpeakeasyBase {
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


export class GetUpdateAssumeRolePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateAssumeRolePolicyQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateAssumeRolePolicyHeaders;
}


export class GetUpdateAssumeRolePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
