import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeFleetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeFleetEventsXAmzTargetEnum {
    GameLiftDescribeFleetEvents = "GameLift.DescribeFleetEvents"
}


export class DescribeFleetEventsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeFleetEventsXAmzTargetEnum;
}


export class DescribeFleetEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeFleetEventsQueryParams;

  @Metadata()
  headers: DescribeFleetEventsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeFleetEventsInput;
}


export class DescribeFleetEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeFleetEventsOutput?: shared.DescribeFleetEventsOutput;

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
