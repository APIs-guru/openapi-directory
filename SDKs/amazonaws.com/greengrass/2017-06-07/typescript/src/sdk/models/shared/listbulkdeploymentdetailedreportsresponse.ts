import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BulkDeploymentResult } from "./bulkdeploymentresult";



export class ListBulkDeploymentDetailedReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deployments", elemType: BulkDeploymentResult })
  deployments?: BulkDeploymentResult[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
