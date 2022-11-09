import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";
import { DeploymentStatusEnum } from "./deploymentstatusenum";


// ListDeploymentsInput
/** 
 * Represents the input of a <code>ListDeployments</code> operation.
**/
export class ListDeploymentsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=createTimeRange" })
  createTimeRange?: TimeRange;

  @Metadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName?: string;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=includeOnlyStatuses" })
  includeOnlyStatuses?: DeploymentStatusEnum[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
