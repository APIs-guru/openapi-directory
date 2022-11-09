import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDeploymentsOutput
/** 
 * Represents the output of a <code>ListDeployments</code> operation.
**/
export class ListDeploymentsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments" })
  deployments?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
