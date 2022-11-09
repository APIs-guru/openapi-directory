import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Facet } from "./facet";


export class GetFacetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Facet" })
  facet?: Facet;
}
