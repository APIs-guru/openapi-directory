import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SubmitAttachmentStateChangesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitAttachmentStateChanges = "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges"
}


export class SubmitAttachmentStateChangesHeaders extends SpeakeasyBase {
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
  xAmzTarget: SubmitAttachmentStateChangesXAmzTargetEnum;
}


export class SubmitAttachmentStateChangesRequest extends SpeakeasyBase {
  @Metadata()
  headers: SubmitAttachmentStateChangesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubmitAttachmentStateChangesRequest;
}


export class SubmitAttachmentStateChangesResponse extends SpeakeasyBase {
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
  submitAttachmentStateChangesResponse?: shared.SubmitAttachmentStateChangesResponse;
}
