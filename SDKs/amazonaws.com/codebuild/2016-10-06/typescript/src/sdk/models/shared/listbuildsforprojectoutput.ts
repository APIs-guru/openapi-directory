import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListBuildsForProjectOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
