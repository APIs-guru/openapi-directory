import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeImageBuildersXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeImageBuilders = "PhotonAdminProxyService.DescribeImageBuilders"
}


export class DescribeImageBuildersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeImageBuildersXAmzTargetEnum;
}


export class DescribeImageBuildersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeImageBuildersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeImageBuildersRequest;
}


export class DescribeImageBuildersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeImageBuildersResult?: shared.DescribeImageBuildersResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
