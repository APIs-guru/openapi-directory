import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BulkDeployment } from "./bulkdeployment";


export class ListBulkDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BulkDeployments", elemType: shared.BulkDeployment })
  bulkDeployments?: BulkDeployment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
