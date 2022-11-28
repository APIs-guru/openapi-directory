import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTaskDefinitionFamiliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=families" })
  families?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
