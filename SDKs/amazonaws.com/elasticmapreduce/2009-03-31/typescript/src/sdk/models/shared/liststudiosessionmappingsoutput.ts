import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SessionMappingSummary } from "./sessionmappingsummary";


export class ListStudioSessionMappingsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=SessionMappings", elemType: shared.SessionMappingSummary })
  sessionMappings?: SessionMappingSummary[];
}
