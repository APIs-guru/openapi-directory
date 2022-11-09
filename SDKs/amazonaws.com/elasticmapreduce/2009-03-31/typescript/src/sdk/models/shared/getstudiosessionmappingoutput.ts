import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SessionMappingDetail } from "./sessionmappingdetail";


export class GetStudioSessionMappingOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=SessionMapping" })
  sessionMapping?: SessionMappingDetail;
}
