import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDimensionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionNames" })
  dimensionNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
