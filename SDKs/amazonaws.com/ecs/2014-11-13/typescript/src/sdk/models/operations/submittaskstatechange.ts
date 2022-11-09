import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SubmitTaskStateChangeXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitTaskStateChange = "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange"
}


export class SubmitTaskStateChangeHeaders extends SpeakeasyBase {
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
  xAmzTarget: SubmitTaskStateChangeXAmzTargetEnum;
}


export class SubmitTaskStateChangeRequest extends SpeakeasyBase {
  @Metadata()
  headers: SubmitTaskStateChangeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubmitTaskStateChangeRequest;
}


export class SubmitTaskStateChangeResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  submitTaskStateChangeResponse?: shared.SubmitTaskStateChangeResponse;
}
