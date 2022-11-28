import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetMissionProfileResponse
/** 
 * <p/>
**/
export class GetMissionProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactPostPassDurationSeconds" })
  contactPostPassDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=contactPrePassDurationSeconds" })
  contactPrePassDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=dataflowEdges" })
  dataflowEdges?: string[][];

  @SpeakeasyMetadata({ data: "json, name=minimumViableContactDurationSeconds" })
  minimumViableContactDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=missionProfileArn" })
  missionProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=missionProfileId" })
  missionProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=trackingConfigArn" })
  trackingConfigArn?: string;
}
