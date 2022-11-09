import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeFleetUtilizationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeFleetUtilizationXAmzTargetEnum {
    GameLiftDescribeFleetUtilization = "GameLift.DescribeFleetUtilization"
}


export class DescribeFleetUtilizationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeFleetUtilizationXAmzTargetEnum;
}


export class DescribeFleetUtilizationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeFleetUtilizationQueryParams;

  @Metadata()
  headers: DescribeFleetUtilizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeFleetUtilizationInput;
}


export class DescribeFleetUtilizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeFleetUtilizationOutput?: shared.DescribeFleetUtilizationOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
