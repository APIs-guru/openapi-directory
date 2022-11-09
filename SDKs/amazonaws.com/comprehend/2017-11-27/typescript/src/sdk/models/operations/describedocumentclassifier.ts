import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDocumentClassifierXAmzTargetEnum {
    Comprehend20171127DescribeDocumentClassifier = "Comprehend_20171127.DescribeDocumentClassifier"
}


export class DescribeDocumentClassifierHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDocumentClassifierXAmzTargetEnum;
}


export class DescribeDocumentClassifierRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDocumentClassifierHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDocumentClassifierRequest;
}


export class DescribeDocumentClassifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDocumentClassifierResponse?: shared.DescribeDocumentClassifierResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
