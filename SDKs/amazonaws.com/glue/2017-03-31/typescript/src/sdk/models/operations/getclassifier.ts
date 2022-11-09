import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetClassifierXAmzTargetEnum {
    AwsGlueGetClassifier = "AWSGlue.GetClassifier"
}


export class GetClassifierHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetClassifierXAmzTargetEnum;
}


export class GetClassifierRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetClassifierHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetClassifierRequest;
}


export class GetClassifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  getClassifierResponse?: shared.GetClassifierResponse;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
