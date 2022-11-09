import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateServiceLinkedRoleActionEnum {
    CreateServiceLinkedRole = "CreateServiceLinkedRole"
}

export enum GetCreateServiceLinkedRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetCreateServiceLinkedRoleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSServiceName" })
  awsServiceName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateServiceLinkedRoleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CustomSuffix" })
  customSuffix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateServiceLinkedRoleVersionEnum;
}


export class GetCreateServiceLinkedRoleHeaders extends SpeakeasyBase {
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


export class GetCreateServiceLinkedRoleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateServiceLinkedRoleQueryParams;

  @Metadata()
  headers: GetCreateServiceLinkedRoleHeaders;
}


export class GetCreateServiceLinkedRoleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
