import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeOrganizationConfigRulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeOrganizationConfigRulesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConfigRules = "StarlingDoveService.DescribeOrganizationConfigRules"
}


export class DescribeOrganizationConfigRulesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeOrganizationConfigRulesXAmzTargetEnum;
}


export class DescribeOrganizationConfigRulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeOrganizationConfigRulesQueryParams;

  @Metadata()
  headers: DescribeOrganizationConfigRulesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeOrganizationConfigRulesRequest;
}


export class DescribeOrganizationConfigRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeOrganizationConfigRulesResponse?: shared.DescribeOrganizationConfigRulesResponse;

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
