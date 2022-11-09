import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateMissionProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=missionProfileId" })
  missionProfileId: string;
}


export class UpdateMissionProfileHeaders extends SpeakeasyBase {
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


export class UpdateMissionProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactPostPassDurationSeconds" })
  contactPostPassDurationSeconds?: number;

  @Metadata({ data: "json, name=contactPrePassDurationSeconds" })
  contactPrePassDurationSeconds?: number;

  @Metadata({ data: "json, name=dataflowEdges" })
  dataflowEdges?: string[][];

  @Metadata({ data: "json, name=minimumViableContactDurationSeconds" })
  minimumViableContactDurationSeconds?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=trackingConfigArn" })
  trackingConfigArn?: string;
}


export class UpdateMissionProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMissionProfilePathParams;

  @Metadata()
  headers: UpdateMissionProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateMissionProfileRequestBody;
}


export class UpdateMissionProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missionProfileIdResponse?: shared.MissionProfileIdResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
