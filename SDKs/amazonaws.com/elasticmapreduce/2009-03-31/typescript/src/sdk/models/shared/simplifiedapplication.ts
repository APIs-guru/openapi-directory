import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SimplifiedApplication
/** 
 * The returned release label application names or versions.
**/
export class SimplifiedApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
