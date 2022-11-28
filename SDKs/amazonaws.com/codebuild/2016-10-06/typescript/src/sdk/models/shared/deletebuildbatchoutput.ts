import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildNotDeleted } from "./buildnotdeleted";



export class DeleteBuildBatchOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildsDeleted" })
  buildsDeleted?: string[];

  @SpeakeasyMetadata({ data: "json, name=buildsNotDeleted", elemType: BuildNotDeleted })
  buildsNotDeleted?: BuildNotDeleted[];

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
