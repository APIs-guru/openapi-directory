import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListEntitiesForPolicyActionEnum {
    ListEntitiesForPolicy = "ListEntitiesForPolicy"
}

export enum GetListEntitiesForPolicyEntityFilterEnum {
    User = "User",
    Role = "Role",
    Group = "Group",
    LocalManagedPolicy = "LocalManagedPolicy",
    AwsManagedPolicy = "AWSManagedPolicy"
}

export enum GetListEntitiesForPolicyPolicyUsageFilterEnum {
    PermissionsPolicy = "PermissionsPolicy",
    PermissionsBoundary = "PermissionsBoundary"
}

export enum GetListEntitiesForPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListEntitiesForPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListEntitiesForPolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EntityFilter" })
  entityFilter?: GetListEntitiesForPolicyEntityFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" })
  pathPrefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyUsageFilter" })
  policyUsageFilter?: GetListEntitiesForPolicyPolicyUsageFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListEntitiesForPolicyVersionEnum;
}


export class GetListEntitiesForPolicyHeaders extends SpeakeasyBase {
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


export class GetListEntitiesForPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListEntitiesForPolicyQueryParams;

  @SpeakeasyMetadata()
  headers: GetListEntitiesForPolicyHeaders;
}


export class GetListEntitiesForPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
