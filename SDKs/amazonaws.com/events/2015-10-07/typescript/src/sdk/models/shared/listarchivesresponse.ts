import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Archive } from "./archive";


export class ListArchivesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Archives", elemType: shared.Archive })
  archives?: Archive[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
