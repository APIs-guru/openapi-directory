import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";



// DbInstanceMessage
/** 
 * Represents the output of <a>DescribeDBInstances</a>.
**/
export class DbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbInstance })
  dbInstances?: DbInstance[];

  @SpeakeasyMetadata()
  marker?: string;
}
