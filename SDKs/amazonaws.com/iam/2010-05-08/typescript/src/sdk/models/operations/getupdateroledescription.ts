import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateRoleDescriptionActionEnum {
    UpdateRoleDescription = "UpdateRoleDescription"
}

export enum GetUpdateRoleDescriptionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateRoleDescriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateRoleDescriptionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateRoleDescriptionVersionEnum;
}


export class GetUpdateRoleDescriptionHeaders extends SpeakeasyBase {
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


export class GetUpdateRoleDescriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateRoleDescriptionQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateRoleDescriptionHeaders;
}


export class GetUpdateRoleDescriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
