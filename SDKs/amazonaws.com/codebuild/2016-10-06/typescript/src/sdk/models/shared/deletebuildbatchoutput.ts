import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildNotDeleted } from "./buildnotdeleted";


export class DeleteBuildBatchOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildsDeleted" })
  buildsDeleted?: string[];

  @Metadata({ data: "json, name=buildsNotDeleted", elemType: shared.BuildNotDeleted })
  buildsNotDeleted?: BuildNotDeleted[];

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
