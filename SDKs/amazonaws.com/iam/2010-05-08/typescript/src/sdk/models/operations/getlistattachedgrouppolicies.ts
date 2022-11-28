import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListAttachedGroupPoliciesActionEnum {
    ListAttachedGroupPolicies = "ListAttachedGroupPolicies"
}

export enum GetListAttachedGroupPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListAttachedGroupPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListAttachedGroupPoliciesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" })
  pathPrefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListAttachedGroupPoliciesVersionEnum;
}


export class GetListAttachedGroupPoliciesHeaders extends SpeakeasyBase {
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


export class GetListAttachedGroupPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListAttachedGroupPoliciesQueryParams;

  @SpeakeasyMetadata()
  headers: GetListAttachedGroupPoliciesHeaders;
}


export class GetListAttachedGroupPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
