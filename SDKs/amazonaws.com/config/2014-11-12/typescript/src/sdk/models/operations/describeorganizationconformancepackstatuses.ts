import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeOrganizationConformancePackStatusesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeOrganizationConformancePackStatusesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConformancePackStatuses = "StarlingDoveService.DescribeOrganizationConformancePackStatuses"
}


export class DescribeOrganizationConformancePackStatusesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeOrganizationConformancePackStatusesXAmzTargetEnum;
}


export class DescribeOrganizationConformancePackStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeOrganizationConformancePackStatusesQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeOrganizationConformancePackStatusesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeOrganizationConformancePackStatusesRequest;
}


export class DescribeOrganizationConformancePackStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeOrganizationConformancePackStatusesResponse?: shared.DescribeOrganizationConformancePackStatusesResponse;

  @SpeakeasyMetadata()
  invalidLimitException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  noSuchOrganizationConformancePackException?: any;

  @SpeakeasyMetadata()
  organizationAccessDeniedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
