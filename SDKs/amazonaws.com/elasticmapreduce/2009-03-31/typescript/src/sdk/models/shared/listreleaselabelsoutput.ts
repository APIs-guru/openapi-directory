import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListReleaseLabelsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ReleaseLabels" })
  releaseLabels?: string[];
}
