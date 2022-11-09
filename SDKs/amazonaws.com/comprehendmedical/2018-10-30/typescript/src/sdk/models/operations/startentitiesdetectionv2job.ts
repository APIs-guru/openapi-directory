import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030StartEntitiesDetectionV2Job = "ComprehendMedical_20181030.StartEntitiesDetectionV2Job"
}


export class StartEntitiesDetectionV2JobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartEntitiesDetectionV2JobXAmzTargetEnum;
}


export class StartEntitiesDetectionV2JobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartEntitiesDetectionV2JobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartEntitiesDetectionV2JobRequest;
}


export class StartEntitiesDetectionV2JobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startEntitiesDetectionV2JobResponse?: shared.StartEntitiesDetectionV2JobResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
