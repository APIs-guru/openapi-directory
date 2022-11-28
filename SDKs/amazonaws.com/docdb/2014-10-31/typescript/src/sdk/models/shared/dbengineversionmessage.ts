import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersion } from "./dbengineversion";



// DbEngineVersionMessage
/** 
 * Represents the output of <a>DescribeDBEngineVersions</a>.
**/
export class DbEngineVersionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbEngineVersion })
  dbEngineVersions?: DbEngineVersion[];

  @SpeakeasyMetadata()
  marker?: string;
}
