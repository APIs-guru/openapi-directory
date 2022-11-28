import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingConfiguration } from "./matchmakingconfiguration";



// DescribeMatchmakingConfigurationsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeMatchmakingConfigurationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: MatchmakingConfiguration })
  configurations?: MatchmakingConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
