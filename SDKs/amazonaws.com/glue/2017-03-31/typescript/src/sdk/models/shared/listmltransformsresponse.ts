import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListMlTransformsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TransformIds" })
  transformIds: string[];
}
