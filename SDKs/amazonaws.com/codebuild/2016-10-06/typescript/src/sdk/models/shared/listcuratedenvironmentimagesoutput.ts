import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentPlatform } from "./environmentplatform";



export class ListCuratedEnvironmentImagesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=platforms", elemType: EnvironmentPlatform })
  platforms?: EnvironmentPlatform[];
}
