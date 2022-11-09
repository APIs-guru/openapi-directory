import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAutoScalingConfigurationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAutoScalingConfigurationsXAmzTargetEnum {
    AppRunnerListAutoScalingConfigurations = "AppRunner.ListAutoScalingConfigurations"
}


export class ListAutoScalingConfigurationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAutoScalingConfigurationsXAmzTargetEnum;
}


export class ListAutoScalingConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAutoScalingConfigurationsQueryParams;

  @Metadata()
  headers: ListAutoScalingConfigurationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAutoScalingConfigurationsRequest;
}


export class ListAutoScalingConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listAutoScalingConfigurationsResponse?: shared.ListAutoScalingConfigurationsResponse;

  @Metadata()
  statusCode: number;
}
