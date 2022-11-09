import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetMissionProfileResponse
/** 
 * <p/>
**/
export class GetMissionProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactPostPassDurationSeconds" })
  contactPostPassDurationSeconds?: number;

  @Metadata({ data: "json, name=contactPrePassDurationSeconds" })
  contactPrePassDurationSeconds?: number;

  @Metadata({ data: "json, name=dataflowEdges" })
  dataflowEdges?: string[][];

  @Metadata({ data: "json, name=minimumViableContactDurationSeconds" })
  minimumViableContactDurationSeconds?: number;

  @Metadata({ data: "json, name=missionProfileArn" })
  missionProfileArn?: string;

  @Metadata({ data: "json, name=missionProfileId" })
  missionProfileId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=trackingConfigArn" })
  trackingConfigArn?: string;
}
