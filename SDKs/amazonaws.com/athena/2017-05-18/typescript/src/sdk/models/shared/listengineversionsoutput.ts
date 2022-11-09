import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EngineVersion } from "./engineversion";


export class ListEngineVersionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngineVersions", elemType: shared.EngineVersion })
  engineVersions?: EngineVersion[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
