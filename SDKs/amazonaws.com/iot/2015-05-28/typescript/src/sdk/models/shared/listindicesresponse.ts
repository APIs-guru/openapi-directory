import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListIndicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexNames" })
  indexNames?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
