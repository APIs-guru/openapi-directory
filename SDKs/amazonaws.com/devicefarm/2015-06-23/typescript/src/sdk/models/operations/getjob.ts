import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetJobXAmzTargetEnum {
    DeviceFarm20150623GetJob = "DeviceFarm_20150623.GetJob"
}


export class GetJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetJobXAmzTargetEnum;
}


export class GetJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetJobRequest;
}


export class GetJobResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getJobResult?: shared.GetJobResult;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}
