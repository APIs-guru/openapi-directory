import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Position
/** 
 * A position in a policy.
**/
export class Position extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column: number;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;
}
