import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";
import { DeploymentStatusEnum } from "./deploymentstatusenum";



// ListDeploymentsInput
/** 
 * Represents the input of a <code>ListDeployments</code> operation.
**/
export class ListDeploymentsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=createTimeRange" })
  createTimeRange?: TimeRange;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=includeOnlyStatuses" })
  includeOnlyStatuses?: DeploymentStatusEnum[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
