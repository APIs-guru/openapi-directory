import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RunJobFlowOutput
/** 
 *  The result of the <a>RunJobFlow</a> operation. 
**/
export class RunJobFlowOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=JobFlowId" })
  jobFlowId?: string;
}
