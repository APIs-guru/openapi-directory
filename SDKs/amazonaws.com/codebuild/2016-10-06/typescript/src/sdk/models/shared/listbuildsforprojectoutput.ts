import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListBuildsForProjectOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
