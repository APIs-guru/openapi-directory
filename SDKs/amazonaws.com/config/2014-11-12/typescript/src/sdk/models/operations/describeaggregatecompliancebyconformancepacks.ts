import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeAggregateComplianceByConformancePacksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeAggregateComplianceByConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeAggregateComplianceByConformancePacks = "StarlingDoveService.DescribeAggregateComplianceByConformancePacks"
}


export class DescribeAggregateComplianceByConformancePacksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAggregateComplianceByConformancePacksXAmzTargetEnum;
}


export class DescribeAggregateComplianceByConformancePacksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeAggregateComplianceByConformancePacksQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeAggregateComplianceByConformancePacksHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAggregateComplianceByConformancePacksRequest;
}


export class DescribeAggregateComplianceByConformancePacksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeAggregateComplianceByConformancePacksResponse?: shared.DescribeAggregateComplianceByConformancePacksResponse;

  @SpeakeasyMetadata()
  invalidLimitException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  noSuchConfigurationAggregatorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
