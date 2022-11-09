import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeImagePermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeImagePermissionsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeImagePermissions = "PhotonAdminProxyService.DescribeImagePermissions"
}


export class DescribeImagePermissionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeImagePermissionsXAmzTargetEnum;
}


export class DescribeImagePermissionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeImagePermissionsQueryParams;

  @Metadata()
  headers: DescribeImagePermissionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeImagePermissionsRequest;
}


export class DescribeImagePermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeImagePermissionsResult?: shared.DescribeImagePermissionsResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
