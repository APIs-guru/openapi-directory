import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestRoleResponse
/** 
 * The <code>TestRoleResponse</code> structure.
**/
export class TestRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Messages" })
  messages?: string[];

  @SpeakeasyMetadata({ data: "json, name=Success" })
  success?: string;
}
