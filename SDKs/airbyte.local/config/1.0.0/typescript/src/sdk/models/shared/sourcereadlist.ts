import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceRead } from "./sourceread";


export class SourceReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=sources", elemType: shared.SourceRead })
  sources: SourceRead[];
}
