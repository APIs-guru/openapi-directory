import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateEnvironmentOperationsRoleActionEnum {
    AssociateEnvironmentOperationsRole = "AssociateEnvironmentOperationsRole"
}

export enum GetAssociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetAssociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateEnvironmentOperationsRoleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OperationsRole" })
  operationsRole: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateEnvironmentOperationsRoleVersionEnum;
}


export class GetAssociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
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


export class GetAssociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateEnvironmentOperationsRoleQueryParams;

  @Metadata()
  headers: GetAssociateEnvironmentOperationsRoleHeaders;
}


export class GetAssociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
