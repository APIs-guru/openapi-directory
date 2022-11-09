import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDimensionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionNames" })
  dimensionNames?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
