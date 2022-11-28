import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SubmitContainerStateChangeXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitContainerStateChange = "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange"
}


export class SubmitContainerStateChangeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: SubmitContainerStateChangeXAmzTargetEnum;
}


export class SubmitContainerStateChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SubmitContainerStateChangeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubmitContainerStateChangeRequest;
}


export class SubmitContainerStateChangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  submitContainerStateChangeResponse?: shared.SubmitContainerStateChangeResponse;
}
