import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BulkDeployment } from "./bulkdeployment";



export class ListBulkDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BulkDeployments", elemType: BulkDeployment })
  bulkDeployments?: BulkDeployment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
