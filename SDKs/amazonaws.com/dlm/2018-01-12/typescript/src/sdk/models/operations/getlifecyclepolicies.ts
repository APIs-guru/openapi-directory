import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetLifecyclePoliciesStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Error = "ERROR"
}


export class GetLifecyclePoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=policyIds" })
  policyIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceTypes" })
  resourceTypes?: shared.ResourceTypeValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: GetLifecyclePoliciesStateEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagsToAdd" })
  tagsToAdd?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetTags" })
  targetTags?: string[];
}


export class GetLifecyclePoliciesHeaders extends SpeakeasyBase {
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


export class GetLifecyclePoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLifecyclePoliciesQueryParams;

  @SpeakeasyMetadata()
  headers: GetLifecyclePoliciesHeaders;
}


export class GetLifecyclePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLifecyclePoliciesResponse?: shared.GetLifecyclePoliciesResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
