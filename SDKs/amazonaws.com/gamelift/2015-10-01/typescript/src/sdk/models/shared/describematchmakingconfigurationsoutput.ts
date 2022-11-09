import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchmakingConfiguration } from "./matchmakingconfiguration";


// DescribeMatchmakingConfigurationsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeMatchmakingConfigurationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configurations", elemType: shared.MatchmakingConfiguration })
  configurations?: MatchmakingConfiguration[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
