import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceRead } from "./sourceread";



export class SourceReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sources", elemType: SourceRead })
  sources: SourceRead[];
}
