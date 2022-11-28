import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpgradeTarget } from "./upgradetarget";



// DbEngineVersion
/** 
 *  Detailed information about an engine version. 
**/
export class DbEngineVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbEngineDescription?: string;

  @SpeakeasyMetadata()
  dbEngineVersionDescription?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  exportableLogTypes?: string[];

  @SpeakeasyMetadata()
  supportsLogExportsToCloudwatchLogs?: boolean;

  @SpeakeasyMetadata({ elemType: UpgradeTarget })
  validUpgradeTarget?: UpgradeTarget[];
}
