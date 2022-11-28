import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrganizationConfigRuleDetailedStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum {
    StarlingDoveServiceGetOrganizationConfigRuleDetailedStatus = "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus"
}


export class GetOrganizationConfigRuleDetailedStatusHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum;
}


export class GetOrganizationConfigRuleDetailedStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrganizationConfigRuleDetailedStatusQueryParams;

  @SpeakeasyMetadata()
  headers: GetOrganizationConfigRuleDetailedStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetOrganizationConfigRuleDetailedStatusRequest;
}


export class GetOrganizationConfigRuleDetailedStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getOrganizationConfigRuleDetailedStatusResponse?: shared.GetOrganizationConfigRuleDetailedStatusResponse;

  @SpeakeasyMetadata()
  invalidLimitException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  noSuchOrganizationConfigRuleException?: any;

  @SpeakeasyMetadata()
  organizationAccessDeniedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
