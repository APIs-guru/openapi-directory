import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SDKType } from "./sdktype";



// SDKTypes
/** 
 * The collection of <a>SdkType</a> instances.
**/
export class SDKTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SDKType })
  items?: SDKType[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
