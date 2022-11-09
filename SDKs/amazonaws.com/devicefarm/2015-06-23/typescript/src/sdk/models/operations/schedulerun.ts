import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ScheduleRunXAmzTargetEnum {
    DeviceFarm20150623ScheduleRun = "DeviceFarm_20150623.ScheduleRun"
}


export class ScheduleRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: ScheduleRunXAmzTargetEnum;
}


export class ScheduleRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: ScheduleRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ScheduleRunRequest;
}


export class ScheduleRunResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  idempotencyException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  scheduleRunResult?: shared.ScheduleRunResult;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}
