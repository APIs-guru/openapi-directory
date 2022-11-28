import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListBuildsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
