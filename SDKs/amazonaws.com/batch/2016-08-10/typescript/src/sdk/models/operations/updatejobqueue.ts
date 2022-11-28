import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateJobQueueHeaders extends SpeakeasyBase {
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
}

export enum UpdateJobQueueRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class UpdateJobQueueRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentOrder", elemType: shared.ComputeEnvironmentOrder })
  computeEnvironmentOrder?: shared.ComputeEnvironmentOrder[];

  @SpeakeasyMetadata({ data: "json, name=jobQueue" })
  jobQueue: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: UpdateJobQueueRequestBodyStateEnum;
}


export class UpdateJobQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateJobQueueHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateJobQueueRequestBody;
}


export class UpdateJobQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateJobQueueResponse?: shared.UpdateJobQueueResponse;
}
