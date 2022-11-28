import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SimplifiedApplication
/** 
 * The returned release label application names or versions.
**/
export class SimplifiedApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
