import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeGameSessionsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeGameSessionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusFilter" })
  statusFilter?: string;
}
