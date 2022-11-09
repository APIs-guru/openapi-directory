import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeArchiveXAmzTargetEnum {
    AwsEventsDescribeArchive = "AWSEvents.DescribeArchive"
}


export class DescribeArchiveHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeArchiveXAmzTargetEnum;
}


export class DescribeArchiveRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeArchiveHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeArchiveRequest;
}


export class DescribeArchiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeArchiveResponse?: shared.DescribeArchiveResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
