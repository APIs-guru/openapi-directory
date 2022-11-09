import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeGenEdge
/** 
 * Represents a directional edge in a directed acyclic graph (DAG).
**/
export class CodeGenEdge extends SpeakeasyBase {
  @Metadata({ data: "json, name=Source" })
  source: string;

  @Metadata({ data: "json, name=Target" })
  target: string;

  @Metadata({ data: "json, name=TargetParameter" })
  targetParameter?: string;
}
