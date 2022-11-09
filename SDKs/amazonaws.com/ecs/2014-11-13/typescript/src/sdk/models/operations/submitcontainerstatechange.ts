import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SubmitContainerStateChangeXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitContainerStateChange = "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange"
}


export class SubmitContainerStateChangeHeaders extends SpeakeasyBase {
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
  xAmzTarget: SubmitContainerStateChangeXAmzTargetEnum;
}


export class SubmitContainerStateChangeRequest extends SpeakeasyBase {
  @Metadata()
  headers: SubmitContainerStateChangeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubmitContainerStateChangeRequest;
}


export class SubmitContainerStateChangeResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  submitContainerStateChangeResponse?: shared.SubmitContainerStateChangeResponse;
}
