import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Facet } from "./facet";



export class GetFacetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Facet" })
  facet?: Facet;
}
