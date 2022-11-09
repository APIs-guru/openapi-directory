import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BulkDeploymentResult } from "./bulkdeploymentresult";


export class ListBulkDeploymentDetailedReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Deployments", elemType: shared.BulkDeploymentResult })
  deployments?: BulkDeploymentResult[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
