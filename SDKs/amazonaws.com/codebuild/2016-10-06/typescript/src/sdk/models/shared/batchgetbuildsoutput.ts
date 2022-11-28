import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";



export class BatchGetBuildsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builds", elemType: Build })
  builds?: Build[];

  @SpeakeasyMetadata({ data: "json, name=buildsNotFound" })
  buildsNotFound?: string[];
}
