import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListReleaseLabelsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ReleaseLabels" })
  releaseLabels?: string[];
}
