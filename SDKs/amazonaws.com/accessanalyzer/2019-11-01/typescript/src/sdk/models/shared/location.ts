import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PathElement } from "./pathelement";
import { Span } from "./span";


// Location
/** 
 * A location in a policy that is represented as a path through the JSON representation and a corresponding span.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=path", elemType: shared.PathElement })
  path: PathElement[];

  @Metadata({ data: "json, name=span" })
  span: Span;
}
