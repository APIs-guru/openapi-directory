import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeFleetLocationUtilizationXAmzTargetEnum {
    GameLiftDescribeFleetLocationUtilization = "GameLift.DescribeFleetLocationUtilization"
}


export class DescribeFleetLocationUtilizationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeFleetLocationUtilizationXAmzTargetEnum;
}


export class DescribeFleetLocationUtilizationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeFleetLocationUtilizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeFleetLocationUtilizationInput;
}


export class DescribeFleetLocationUtilizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeFleetLocationUtilizationOutput?: shared.DescribeFleetLocationUtilizationOutput;

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
