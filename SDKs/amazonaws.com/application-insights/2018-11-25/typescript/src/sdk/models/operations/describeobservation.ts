import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeObservationXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeObservation = "EC2WindowsBarleyService.DescribeObservation"
}


export class DescribeObservationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeObservationXAmzTargetEnum;
}


export class DescribeObservationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeObservationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeObservationRequest;
}


export class DescribeObservationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeObservationResponse?: shared.DescribeObservationResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
