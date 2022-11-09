import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTrailsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrails = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails"
}


export class DescribeTrailsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTrailsXAmzTargetEnum;
}


export class DescribeTrailsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTrailsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTrailsRequest;
}


export class DescribeTrailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTrailsResponse?: shared.DescribeTrailsResponse;

  @Metadata()
  invalidTrailNameException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
