import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathElement } from "./pathelement";
import { Span } from "./span";



// Location
/** 
 * A location in a policy that is represented as a path through the JSON representation and a corresponding span.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path", elemType: PathElement })
  path: PathElement[];

  @SpeakeasyMetadata({ data: "json, name=span" })
  span: Span;
}
