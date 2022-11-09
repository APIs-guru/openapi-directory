import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrganizationConfigRuleDetailedStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum {
    StarlingDoveServiceGetOrganizationConfigRuleDetailedStatus = "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus"
}


export class GetOrganizationConfigRuleDetailedStatusHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum;
}


export class GetOrganizationConfigRuleDetailedStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOrganizationConfigRuleDetailedStatusQueryParams;

  @Metadata()
  headers: GetOrganizationConfigRuleDetailedStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOrganizationConfigRuleDetailedStatusRequest;
}


export class GetOrganizationConfigRuleDetailedStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOrganizationConfigRuleDetailedStatusResponse?: shared.GetOrganizationConfigRuleDetailedStatusResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  noSuchOrganizationConfigRuleException?: any;

  @Metadata()
  organizationAccessDeniedException?: any;

  @Metadata()
  statusCode: number;
}
