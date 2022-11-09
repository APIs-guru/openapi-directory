import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAssessmentTargetsXAmzTargetEnum {
    InspectorServiceDescribeAssessmentTargets = "InspectorService.DescribeAssessmentTargets"
}


export class DescribeAssessmentTargetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAssessmentTargetsXAmzTargetEnum;
}


export class DescribeAssessmentTargetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAssessmentTargetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAssessmentTargetsRequest;
}


export class DescribeAssessmentTargetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAssessmentTargetsResponse?: shared.DescribeAssessmentTargetsResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
