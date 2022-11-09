import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListUpdatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=updateIds" })
  updateIds?: string[];
}
