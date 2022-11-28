import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionMappingSummary } from "./sessionmappingsummary";



export class ListStudioSessionMappingsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionMappings", elemType: SessionMappingSummary })
  sessionMappings?: SessionMappingSummary[];
}
