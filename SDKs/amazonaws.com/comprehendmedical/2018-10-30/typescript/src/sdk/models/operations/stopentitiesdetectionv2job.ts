import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030StopEntitiesDetectionV2Job = "ComprehendMedical_20181030.StopEntitiesDetectionV2Job"
}


export class StopEntitiesDetectionV2JobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopEntitiesDetectionV2JobXAmzTargetEnum;
}


export class StopEntitiesDetectionV2JobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopEntitiesDetectionV2JobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopEntitiesDetectionV2JobRequest;
}


export class StopEntitiesDetectionV2JobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopEntitiesDetectionV2JobResponse?: shared.StopEntitiesDetectionV2JobResponse;
}
