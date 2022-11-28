import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListObjectChildrenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Children" })
  children?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
