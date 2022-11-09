import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceServerType } from "./resourceservertype";


export class UpdateResourceServerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceServer" })
  resourceServer: ResourceServerType;
}
