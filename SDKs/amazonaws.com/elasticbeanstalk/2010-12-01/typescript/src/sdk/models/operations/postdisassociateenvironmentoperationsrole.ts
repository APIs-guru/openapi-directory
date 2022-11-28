import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDisassociateEnvironmentOperationsRoleActionEnum {
    DisassociateEnvironmentOperationsRole = "DisassociateEnvironmentOperationsRole"
}

export enum PostDisassociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostDisassociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDisassociateEnvironmentOperationsRoleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDisassociateEnvironmentOperationsRoleVersionEnum;
}


export class PostDisassociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
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


export class PostDisassociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDisassociateEnvironmentOperationsRoleQueryParams;

  @SpeakeasyMetadata()
  headers: PostDisassociateEnvironmentOperationsRoleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDisassociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
