import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodePropertiesSummary
/** 
 * An object representing the properties of a node that's associated with a multi-node parallel job.
**/
export class NodePropertiesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isMainNode" })
  isMainNode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeIndex" })
  nodeIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=numNodes" })
  numNodes?: number;
}
