import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListIndicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexNames" })
  indexNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
