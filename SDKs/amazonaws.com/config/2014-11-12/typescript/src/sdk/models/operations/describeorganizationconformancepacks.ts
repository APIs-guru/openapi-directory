import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeOrganizationConformancePacksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeOrganizationConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConformancePacks = "StarlingDoveService.DescribeOrganizationConformancePacks"
}


export class DescribeOrganizationConformancePacksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeOrganizationConformancePacksXAmzTargetEnum;
}


export class DescribeOrganizationConformancePacksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeOrganizationConformancePacksQueryParams;

  @Metadata()
  headers: DescribeOrganizationConformancePacksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeOrganizationConformancePacksRequest;
}


export class DescribeOrganizationConformancePacksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeOrganizationConformancePacksResponse?: shared.DescribeOrganizationConformancePacksResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  noSuchOrganizationConformancePackException?: any;

  @Metadata()
  organizationAccessDeniedException?: any;

  @Metadata()
  statusCode: number;
}
