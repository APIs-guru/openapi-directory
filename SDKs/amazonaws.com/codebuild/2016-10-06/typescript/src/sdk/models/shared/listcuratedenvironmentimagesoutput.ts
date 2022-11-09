import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentPlatform } from "./environmentplatform";


export class ListCuratedEnvironmentImagesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=platforms", elemType: shared.EnvironmentPlatform })
  platforms?: EnvironmentPlatform[];
}
