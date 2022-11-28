import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateServiceLinkedRoleActionEnum {
    CreateServiceLinkedRole = "CreateServiceLinkedRole"
}

export enum GetCreateServiceLinkedRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetCreateServiceLinkedRoleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSServiceName" })
  awsServiceName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateServiceLinkedRoleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CustomSuffix" })
  customSuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateServiceLinkedRoleVersionEnum;
}


export class GetCreateServiceLinkedRoleHeaders extends SpeakeasyBase {
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


export class GetCreateServiceLinkedRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateServiceLinkedRoleQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateServiceLinkedRoleHeaders;
}


export class GetCreateServiceLinkedRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
