import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListUpdatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=updateIds" })
  updateIds?: string[];
}
