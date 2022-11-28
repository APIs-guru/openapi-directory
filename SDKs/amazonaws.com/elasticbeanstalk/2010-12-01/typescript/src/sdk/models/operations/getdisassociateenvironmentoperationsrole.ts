import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisassociateEnvironmentOperationsRoleActionEnum {
    DisassociateEnvironmentOperationsRole = "DisassociateEnvironmentOperationsRole"
}

export enum GetDisassociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDisassociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateEnvironmentOperationsRoleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateEnvironmentOperationsRoleVersionEnum;
}


export class GetDisassociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
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


export class GetDisassociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisassociateEnvironmentOperationsRoleQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisassociateEnvironmentOperationsRoleHeaders;
}


export class GetDisassociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
