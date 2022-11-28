import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RefreshSchemasStatusTypeValueEnum } from "./refreshschemasstatustypevalueenum";



// RefreshSchemasStatus
/** 
 * Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation.
**/
export class RefreshSchemasStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastFailureMessage" })
  lastFailureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastRefreshDate" })
  lastRefreshDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RefreshSchemasStatusTypeValueEnum;
}
