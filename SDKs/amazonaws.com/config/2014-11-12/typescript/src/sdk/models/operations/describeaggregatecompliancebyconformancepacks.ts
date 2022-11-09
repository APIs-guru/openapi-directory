import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeAggregateComplianceByConformancePacksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeAggregateComplianceByConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeAggregateComplianceByConformancePacks = "StarlingDoveService.DescribeAggregateComplianceByConformancePacks"
}


export class DescribeAggregateComplianceByConformancePacksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAggregateComplianceByConformancePacksXAmzTargetEnum;
}


export class DescribeAggregateComplianceByConformancePacksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeAggregateComplianceByConformancePacksQueryParams;

  @Metadata()
  headers: DescribeAggregateComplianceByConformancePacksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAggregateComplianceByConformancePacksRequest;
}


export class DescribeAggregateComplianceByConformancePacksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAggregateComplianceByConformancePacksResponse?: shared.DescribeAggregateComplianceByConformancePacksResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  noSuchConfigurationAggregatorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
