import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodePropertiesSummary
/** 
 * An object representing the properties of a node that's associated with a multi-node parallel job.
**/
export class NodePropertiesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=isMainNode" })
  isMainNode?: boolean;

  @Metadata({ data: "json, name=nodeIndex" })
  nodeIndex?: number;

  @Metadata({ data: "json, name=numNodes" })
  numNodes?: number;
}
