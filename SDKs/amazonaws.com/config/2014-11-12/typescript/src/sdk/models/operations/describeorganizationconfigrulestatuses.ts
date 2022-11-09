import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeOrganizationConfigRuleStatusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeOrganizationConfigRuleStatusesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConfigRuleStatuses = "StarlingDoveService.DescribeOrganizationConfigRuleStatuses"
}


export class DescribeOrganizationConfigRuleStatusesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeOrganizationConfigRuleStatusesXAmzTargetEnum;
}


export class DescribeOrganizationConfigRuleStatusesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeOrganizationConfigRuleStatusesQueryParams;

  @Metadata()
  headers: DescribeOrganizationConfigRuleStatusesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeOrganizationConfigRuleStatusesRequest;
}


export class DescribeOrganizationConfigRuleStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeOrganizationConfigRuleStatusesResponse?: shared.DescribeOrganizationConfigRuleStatusesResponse;

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
