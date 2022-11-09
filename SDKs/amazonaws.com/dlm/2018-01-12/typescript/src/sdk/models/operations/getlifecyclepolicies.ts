import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLifecyclePoliciesStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
,    Error = "ERROR"
}


export class GetLifecyclePoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=policyIds" })
  policyIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceTypes" })
  resourceTypes?: shared.ResourceTypeValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: GetLifecyclePoliciesStateEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagsToAdd" })
  tagsToAdd?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=targetTags" })
  targetTags?: string[];
}


export class GetLifecyclePoliciesHeaders extends SpeakeasyBase {
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


export class GetLifecyclePoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLifecyclePoliciesQueryParams;

  @Metadata()
  headers: GetLifecyclePoliciesHeaders;
}


export class GetLifecyclePoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLifecyclePoliciesResponse?: shared.GetLifecyclePoliciesResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
