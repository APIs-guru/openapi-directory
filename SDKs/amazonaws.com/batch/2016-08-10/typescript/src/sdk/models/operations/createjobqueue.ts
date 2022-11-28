import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateJobQueueHeaders extends SpeakeasyBase {
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

export enum CreateJobQueueRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class CreateJobQueueRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentOrder", elemType: shared.ComputeEnvironmentOrder })
  computeEnvironmentOrder: shared.ComputeEnvironmentOrder[];

  @SpeakeasyMetadata({ data: "json, name=jobQueueName" })
  jobQueueName: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CreateJobQueueRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateJobQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateJobQueueHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateJobQueueRequestBody;
}


export class CreateJobQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createJobQueueResponse?: shared.CreateJobQueueResponse;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
