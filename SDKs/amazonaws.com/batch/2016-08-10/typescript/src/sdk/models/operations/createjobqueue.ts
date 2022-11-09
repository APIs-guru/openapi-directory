import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateJobQueueHeaders extends SpeakeasyBase {
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

export enum CreateJobQueueRequestBodyStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class CreateJobQueueRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironmentOrder", elemType: shared.ComputeEnvironmentOrder })
  computeEnvironmentOrder: shared.ComputeEnvironmentOrder[];

  @Metadata({ data: "json, name=jobQueueName" })
  jobQueueName: string;

  @Metadata({ data: "json, name=priority" })
  priority: number;

  @Metadata({ data: "json, name=state" })
  state?: CreateJobQueueRequestBodyStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateJobQueueRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateJobQueueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateJobQueueRequestBody;
}


export class CreateJobQueueResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createJobQueueResponse?: shared.CreateJobQueueResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
