import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RefreshSchemasStatusTypeValueEnum } from "./refreshschemasstatustypevalueenum";


// RefreshSchemasStatus
/** 
 * Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation.
**/
export class RefreshSchemasStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @Metadata({ data: "json, name=LastFailureMessage" })
  lastFailureMessage?: string;

  @Metadata({ data: "json, name=LastRefreshDate" })
  lastRefreshDate?: Date;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: RefreshSchemasStatusTypeValueEnum;
}
