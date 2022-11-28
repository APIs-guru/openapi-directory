import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedQuery } from "./namedquery";



export class GetNamedQueryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NamedQuery" })
  namedQuery?: NamedQuery;
}
