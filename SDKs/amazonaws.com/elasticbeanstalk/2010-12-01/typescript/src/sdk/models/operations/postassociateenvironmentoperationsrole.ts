import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAssociateEnvironmentOperationsRoleActionEnum {
    AssociateEnvironmentOperationsRole = "AssociateEnvironmentOperationsRole"
}

export enum PostAssociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostAssociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssociateEnvironmentOperationsRoleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssociateEnvironmentOperationsRoleVersionEnum;
}


export class PostAssociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
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


export class PostAssociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAssociateEnvironmentOperationsRoleQueryParams;

  @SpeakeasyMetadata()
  headers: PostAssociateEnvironmentOperationsRoleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
