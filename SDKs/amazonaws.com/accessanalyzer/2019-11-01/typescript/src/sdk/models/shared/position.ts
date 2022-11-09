import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Position
/** 
 * A position in a policy.
**/
export class Position extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column: number;

  @Metadata({ data: "json, name=line" })
  line: number;

  @Metadata({ data: "json, name=offset" })
  offset: number;
}
