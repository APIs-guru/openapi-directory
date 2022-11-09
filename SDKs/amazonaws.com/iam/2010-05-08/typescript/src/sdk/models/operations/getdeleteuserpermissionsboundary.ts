import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteUserPermissionsBoundaryActionEnum {
    DeleteUserPermissionsBoundary = "DeleteUserPermissionsBoundary"
}

export enum GetDeleteUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteUserPermissionsBoundaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteUserPermissionsBoundaryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteUserPermissionsBoundaryVersionEnum;
}


export class GetDeleteUserPermissionsBoundaryHeaders extends SpeakeasyBase {
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


export class GetDeleteUserPermissionsBoundaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteUserPermissionsBoundaryQueryParams;

  @Metadata()
  headers: GetDeleteUserPermissionsBoundaryHeaders;
}


export class GetDeleteUserPermissionsBoundaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
