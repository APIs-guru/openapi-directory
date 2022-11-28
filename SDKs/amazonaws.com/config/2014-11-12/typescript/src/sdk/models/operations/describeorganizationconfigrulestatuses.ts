import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeOrganizationConfigRuleStatusesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeOrganizationConfigRuleStatusesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConfigRuleStatuses = "StarlingDoveService.DescribeOrganizationConfigRuleStatuses"
}


export class DescribeOrganizationConfigRuleStatusesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeOrganizationConfigRuleStatusesXAmzTargetEnum;
}


export class DescribeOrganizationConfigRuleStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeOrganizationConfigRuleStatusesQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeOrganizationConfigRuleStatusesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeOrganizationConfigRuleStatusesRequest;
}


export class DescribeOrganizationConfigRuleStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeOrganizationConfigRuleStatusesResponse?: shared.DescribeOrganizationConfigRuleStatusesResponse;

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
