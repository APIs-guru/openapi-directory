import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionMappingDetail } from "./sessionmappingdetail";



export class GetStudioSessionMappingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SessionMapping" })
  sessionMapping?: SessionMappingDetail;
}
