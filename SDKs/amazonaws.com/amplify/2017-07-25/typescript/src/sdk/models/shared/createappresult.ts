import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { App } from "./app";


export class CreateAppResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=app" })
  app: App;
}
