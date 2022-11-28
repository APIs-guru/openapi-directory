import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



export class GetAppResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app" })
  app: App;
}
