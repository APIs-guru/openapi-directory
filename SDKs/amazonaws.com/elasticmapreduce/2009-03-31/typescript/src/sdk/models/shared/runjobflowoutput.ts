import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RunJobFlowOutput
/** 
 *  The result of the <a>RunJobFlow</a> operation. 
**/
export class RunJobFlowOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=JobFlowId" })
  jobFlowId?: string;
}
