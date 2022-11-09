import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConfigurationAggregatorSourcesStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationAggregatorSourcesStatus = "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus"
}


export class DescribeConfigurationAggregatorSourcesStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum;
}


export class DescribeConfigurationAggregatorSourcesStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeConfigurationAggregatorSourcesStatusQueryParams;

  @Metadata()
  headers: DescribeConfigurationAggregatorSourcesStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigurationAggregatorSourcesStatusRequest;
}


export class DescribeConfigurationAggregatorSourcesStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConfigurationAggregatorSourcesStatusResponse?: shared.DescribeConfigurationAggregatorSourcesStatusResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  noSuchConfigurationAggregatorException?: any;

  @Metadata()
  statusCode: number;
}
