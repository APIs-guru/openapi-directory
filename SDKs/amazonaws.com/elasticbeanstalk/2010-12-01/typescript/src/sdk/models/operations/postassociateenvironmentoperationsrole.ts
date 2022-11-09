import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAssociateEnvironmentOperationsRoleActionEnum {
    AssociateEnvironmentOperationsRole = "AssociateEnvironmentOperationsRole"
}

export enum PostAssociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostAssociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssociateEnvironmentOperationsRoleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssociateEnvironmentOperationsRoleVersionEnum;
}


export class PostAssociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
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


export class PostAssociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAssociateEnvironmentOperationsRoleQueryParams;

  @Metadata()
  headers: PostAssociateEnvironmentOperationsRoleHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
