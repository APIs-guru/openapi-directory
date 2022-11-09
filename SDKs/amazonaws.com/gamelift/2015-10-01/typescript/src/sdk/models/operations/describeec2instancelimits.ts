import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeEc2InstanceLimitsXAmzTargetEnum {
    GameLiftDescribeEc2InstanceLimits = "GameLift.DescribeEC2InstanceLimits"
}


export class DescribeEc2InstanceLimitsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEc2InstanceLimitsXAmzTargetEnum;
}


export class DescribeEc2InstanceLimitsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeEc2InstanceLimitsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEc2InstanceLimitsInput;
}


export class DescribeEc2InstanceLimitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEc2InstanceLimitsOutput?: shared.DescribeEc2InstanceLimitsOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
