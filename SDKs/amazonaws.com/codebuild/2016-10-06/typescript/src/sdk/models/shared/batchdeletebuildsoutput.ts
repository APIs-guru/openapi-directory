import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildNotDeleted } from "./buildnotdeleted";



export class BatchDeleteBuildsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildsDeleted" })
  buildsDeleted?: string[];

  @SpeakeasyMetadata({ data: "json, name=buildsNotDeleted", elemType: BuildNotDeleted })
  buildsNotDeleted?: BuildNotDeleted[];
}
