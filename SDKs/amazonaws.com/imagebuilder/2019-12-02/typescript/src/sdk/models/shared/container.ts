import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Container
/** 
 * A container encapsulates the runtime environment for an application.
**/
export class Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageUris" })
  imageUris?: string[];

  @Metadata({ data: "json, name=region" })
  region?: string;
}
