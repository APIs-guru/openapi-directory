import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMissionProfileHeaders extends SpeakeasyBase {
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


export class CreateMissionProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactPostPassDurationSeconds" })
  contactPostPassDurationSeconds?: number;

  @Metadata({ data: "json, name=contactPrePassDurationSeconds" })
  contactPrePassDurationSeconds?: number;

  @Metadata({ data: "json, name=dataflowEdges" })
  dataflowEdges: string[][];

  @Metadata({ data: "json, name=minimumViableContactDurationSeconds" })
  minimumViableContactDurationSeconds: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=trackingConfigArn" })
  trackingConfigArn: string;
}


export class CreateMissionProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateMissionProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateMissionProfileRequestBody;
}


export class CreateMissionProfileResponse extends SpeakeasyBase {
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
