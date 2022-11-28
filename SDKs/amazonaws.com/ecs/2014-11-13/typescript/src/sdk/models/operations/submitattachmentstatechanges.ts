import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SubmitAttachmentStateChangesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitAttachmentStateChanges = "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges"
}


export class SubmitAttachmentStateChangesHeaders extends SpeakeasyBase {
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
  xAmzTarget: SubmitAttachmentStateChangesXAmzTargetEnum;
}


export class SubmitAttachmentStateChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SubmitAttachmentStateChangesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubmitAttachmentStateChangesRequest;
}


export class SubmitAttachmentStateChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  submitAttachmentStateChangesResponse?: shared.SubmitAttachmentStateChangesResponse;
}
