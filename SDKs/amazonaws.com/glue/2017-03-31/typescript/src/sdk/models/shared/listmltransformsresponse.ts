import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListMlTransformsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TransformIds" })
  transformIds: string[];
}
