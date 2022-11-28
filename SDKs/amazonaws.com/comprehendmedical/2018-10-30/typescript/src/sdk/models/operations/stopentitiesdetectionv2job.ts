import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StopEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030StopEntitiesDetectionV2Job = "ComprehendMedical_20181030.StopEntitiesDetectionV2Job"
}


export class StopEntitiesDetectionV2JobHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StopEntitiesDetectionV2JobXAmzTargetEnum;
}


export class StopEntitiesDetectionV2JobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StopEntitiesDetectionV2JobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StopEntitiesDetectionV2JobRequest;
}


export class StopEntitiesDetectionV2JobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopEntitiesDetectionV2JobResponse?: shared.StopEntitiesDetectionV2JobResponse;
}
