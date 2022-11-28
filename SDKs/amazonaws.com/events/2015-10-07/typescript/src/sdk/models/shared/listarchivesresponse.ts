import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Archive } from "./archive";



export class ListArchivesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Archives", elemType: Archive })
  archives?: Archive[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
