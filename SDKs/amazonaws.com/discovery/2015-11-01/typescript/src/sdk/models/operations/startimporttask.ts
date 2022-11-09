import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartImportTaskXAmzTargetEnum {
    AwsPoseidonServiceV20151101StartImportTask = "AWSPoseidonService_V2015_11_01.StartImportTask"
}


export class StartImportTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartImportTaskXAmzTargetEnum;
}


export class StartImportTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartImportTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartImportTaskRequest;
}


export class StartImportTaskResponse extends SpeakeasyBase {
  @Metadata()
  authorizationErrorException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  homeRegionNotSetException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serverInternalErrorException?: any;

  @Metadata()
  startImportTaskResponse?: shared.StartImportTaskResponse;

  @Metadata()
  statusCode: number;
}
