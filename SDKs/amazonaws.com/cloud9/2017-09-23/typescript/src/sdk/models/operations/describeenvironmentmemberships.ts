import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeEnvironmentMembershipsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeEnvironmentMembershipsXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceDescribeEnvironmentMemberships = "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships"
}


export class DescribeEnvironmentMembershipsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEnvironmentMembershipsXAmzTargetEnum;
}


export class DescribeEnvironmentMembershipsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeEnvironmentMembershipsQueryParams;

  @Metadata()
  headers: DescribeEnvironmentMembershipsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEnvironmentMembershipsRequest;
}


export class DescribeEnvironmentMembershipsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeEnvironmentMembershipsResult?: shared.DescribeEnvironmentMembershipsResult;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
