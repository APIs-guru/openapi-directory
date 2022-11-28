import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentPlatform } from "./componentplatform";



// ComponentLatestVersion
/** 
 * Contains information about the latest version of a component.
**/
export class ComponentLatestVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=platforms", elemType: ComponentPlatform })
  platforms?: ComponentPlatform[];

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;
}
