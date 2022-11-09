import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribePartnerEventSourceXAmzTargetEnum {
    AwsEventsDescribePartnerEventSource = "AWSEvents.DescribePartnerEventSource"
}


export class DescribePartnerEventSourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePartnerEventSourceXAmzTargetEnum;
}


export class DescribePartnerEventSourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribePartnerEventSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePartnerEventSourceRequest;
}


export class DescribePartnerEventSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePartnerEventSourceResponse?: shared.DescribePartnerEventSourceResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  operationDisabledException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
