import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchGameSessionsInput
/** 
 * Represents the input for a request operation.
**/
export class SearchGameSessionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @Metadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortExpression" })
  sortExpression?: string;
}
