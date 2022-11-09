import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Connection } from "./connection";


// TestConnectionResponse
/** 
 * <p/>
**/
export class TestConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connection" })
  connection?: Connection;
}
