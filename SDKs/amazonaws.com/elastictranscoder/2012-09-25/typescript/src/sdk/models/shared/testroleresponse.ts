import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestRoleResponse
/** 
 * The <code>TestRoleResponse</code> structure.
**/
export class TestRoleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Messages" })
  messages?: string[];

  @Metadata({ data: "json, name=Success" })
  success?: string;
}
