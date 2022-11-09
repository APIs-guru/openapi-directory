import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMatchmakingConfigurationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeMatchmakingConfigurationsXAmzTargetEnum {
    GameLiftDescribeMatchmakingConfigurations = "GameLift.DescribeMatchmakingConfigurations"
}


export class DescribeMatchmakingConfigurationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMatchmakingConfigurationsXAmzTargetEnum;
}


export class DescribeMatchmakingConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeMatchmakingConfigurationsQueryParams;

  @Metadata()
  headers: DescribeMatchmakingConfigurationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMatchmakingConfigurationsInput;
}


export class DescribeMatchmakingConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMatchmakingConfigurationsOutput?: shared.DescribeMatchmakingConfigurationsOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedRegionException?: any;
}
