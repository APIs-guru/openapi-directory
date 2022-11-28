import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



export class CreateAppResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app" })
  app: App;
}
