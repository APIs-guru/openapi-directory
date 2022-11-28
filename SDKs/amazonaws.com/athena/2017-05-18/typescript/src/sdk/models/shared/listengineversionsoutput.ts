import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";



export class ListEngineVersionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngineVersions", elemType: EngineVersion })
  engineVersions?: EngineVersion[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
