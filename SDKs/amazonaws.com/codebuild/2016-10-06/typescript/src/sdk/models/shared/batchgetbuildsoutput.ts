import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Build } from "./build";


export class BatchGetBuildsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=builds", elemType: shared.Build })
  builds?: Build[];

  @Metadata({ data: "json, name=buildsNotFound" })
  buildsNotFound?: string[];
}
