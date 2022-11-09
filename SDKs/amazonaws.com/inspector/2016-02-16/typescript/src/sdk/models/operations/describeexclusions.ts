import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeExclusionsXAmzTargetEnum {
    InspectorServiceDescribeExclusions = "InspectorService.DescribeExclusions"
}


export class DescribeExclusionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeExclusionsXAmzTargetEnum;
}


export class DescribeExclusionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeExclusionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeExclusionsRequest;
}


export class DescribeExclusionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeExclusionsResponse?: shared.DescribeExclusionsResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
