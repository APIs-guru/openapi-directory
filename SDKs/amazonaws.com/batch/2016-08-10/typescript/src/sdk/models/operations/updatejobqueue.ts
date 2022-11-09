import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateJobQueueHeaders extends SpeakeasyBase {
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
}

export enum UpdateJobQueueRequestBodyStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class UpdateJobQueueRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironmentOrder", elemType: shared.ComputeEnvironmentOrder })
  computeEnvironmentOrder?: shared.ComputeEnvironmentOrder[];

  @Metadata({ data: "json, name=jobQueue" })
  jobQueue: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=state" })
  state?: UpdateJobQueueRequestBodyStateEnum;
}


export class UpdateJobQueueRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateJobQueueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateJobQueueRequestBody;
}


export class UpdateJobQueueResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateJobQueueResponse?: shared.UpdateJobQueueResponse;
}
