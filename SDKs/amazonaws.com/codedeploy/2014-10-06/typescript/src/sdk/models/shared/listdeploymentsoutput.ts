import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDeploymentsOutput
/** 
 * Represents the output of a <code>ListDeployments</code> operation.
**/
export class ListDeploymentsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments" })
  deployments?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
