import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeGenEdge
/** 
 * Represents a directional edge in a directed acyclic graph (DAG).
**/
export class CodeGenEdge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target: string;

  @SpeakeasyMetadata({ data: "json, name=TargetParameter" })
  targetParameter?: string;
}
