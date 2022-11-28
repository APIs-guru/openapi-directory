import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateMissionProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=missionProfileId" })
  missionProfileId: string;
}


export class UpdateMissionProfileHeaders extends SpeakeasyBase {
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


export class UpdateMissionProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactPostPassDurationSeconds" })
  contactPostPassDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=contactPrePassDurationSeconds" })
  contactPrePassDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=dataflowEdges" })
  dataflowEdges?: string[][];

  @SpeakeasyMetadata({ data: "json, name=minimumViableContactDurationSeconds" })
  minimumViableContactDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingConfigArn" })
  trackingConfigArn?: string;
}


export class UpdateMissionProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMissionProfilePathParams;

  @SpeakeasyMetadata()
  headers: UpdateMissionProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateMissionProfileRequestBody;
}


export class UpdateMissionProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  missionProfileIdResponse?: shared.MissionProfileIdResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
