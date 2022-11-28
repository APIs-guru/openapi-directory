import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceServerType } from "./resourceservertype";



export class CreateResourceServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceServer" })
  resourceServer: ResourceServerType;
}
