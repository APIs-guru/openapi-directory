import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConfigurationAggregatorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeConfigurationAggregatorsXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationAggregators = "StarlingDoveService.DescribeConfigurationAggregators"
}


export class DescribeConfigurationAggregatorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigurationAggregatorsXAmzTargetEnum;
}


export class DescribeConfigurationAggregatorsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeConfigurationAggregatorsQueryParams;

  @Metadata()
  headers: DescribeConfigurationAggregatorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigurationAggregatorsRequest;
}


export class DescribeConfigurationAggregatorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConfigurationAggregatorsResponse?: shared.DescribeConfigurationAggregatorsResponse;

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
