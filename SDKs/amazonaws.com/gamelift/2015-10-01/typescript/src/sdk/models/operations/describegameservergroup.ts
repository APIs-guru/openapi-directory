import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeGameServerGroupXAmzTargetEnum {
    GameLiftDescribeGameServerGroup = "GameLift.DescribeGameServerGroup"
}


export class DescribeGameServerGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeGameServerGroupXAmzTargetEnum;
}


export class DescribeGameServerGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeGameServerGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeGameServerGroupInput;
}


export class DescribeGameServerGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeGameServerGroupOutput?: shared.DescribeGameServerGroupOutput;

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
