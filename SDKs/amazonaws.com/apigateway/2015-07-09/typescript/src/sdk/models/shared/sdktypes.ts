import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SdkType } from "./sdktype";


// SdkTypes
/** 
 * The collection of <a>SdkType</a> instances.
**/
export class SdkTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SdkType })
  items?: SdkType[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
