import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListEntitiesForPolicyActionEnum {
    ListEntitiesForPolicy = "ListEntitiesForPolicy"
}

export enum GetListEntitiesForPolicyEntityFilterEnum {
    User = "User"
,    Role = "Role"
,    Group = "Group"
,    LocalManagedPolicy = "LocalManagedPolicy"
,    AwsManagedPolicy = "AWSManagedPolicy"
}

export enum GetListEntitiesForPolicyPolicyUsageFilterEnum {
    PermissionsPolicy = "PermissionsPolicy"
,    PermissionsBoundary = "PermissionsBoundary"
}

export enum GetListEntitiesForPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListEntitiesForPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListEntitiesForPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EntityFilter" })
  entityFilter?: GetListEntitiesForPolicyEntityFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" })
  pathPrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyUsageFilter" })
  policyUsageFilter?: GetListEntitiesForPolicyPolicyUsageFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListEntitiesForPolicyVersionEnum;
}


export class GetListEntitiesForPolicyHeaders extends SpeakeasyBase {
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


export class GetListEntitiesForPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListEntitiesForPolicyQueryParams;

  @Metadata()
  headers: GetListEntitiesForPolicyHeaders;
}


export class GetListEntitiesForPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
