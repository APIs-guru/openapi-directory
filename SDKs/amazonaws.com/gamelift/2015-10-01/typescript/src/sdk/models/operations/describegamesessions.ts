import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeGameSessionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeGameSessionsXAmzTargetEnum {
    GameLiftDescribeGameSessions = "GameLift.DescribeGameSessions"
}


export class DescribeGameSessionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeGameSessionsXAmzTargetEnum;
}


export class DescribeGameSessionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeGameSessionsQueryParams;

  @Metadata()
  headers: DescribeGameSessionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeGameSessionsInput;
}


export class DescribeGameSessionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeGameSessionsOutput?: shared.DescribeGameSessionsOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminalRoutingStrategyException?: any;

  @Metadata()
  unauthorizedException?: any;
}
