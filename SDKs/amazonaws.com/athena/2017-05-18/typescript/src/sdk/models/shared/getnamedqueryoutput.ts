import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamedQuery } from "./namedquery";


export class GetNamedQueryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NamedQuery" })
  namedQuery?: NamedQuery;
}
