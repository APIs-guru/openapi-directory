import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



// TestConnectionResponse
/** 
 * <p/>
**/
export class TestConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connection" })
  connection?: Connection;
}
