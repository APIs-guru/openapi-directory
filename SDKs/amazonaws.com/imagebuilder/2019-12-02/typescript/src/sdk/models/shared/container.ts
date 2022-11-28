import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Container
/** 
 * A container encapsulates the runtime environment for an application.
**/
export class Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageUris" })
  imageUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
