import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentPlatform } from "./componentplatform";


// ComponentLatestVersion
/** 
 * Contains information about the latest version of a component.
**/
export class ComponentLatestVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=platforms", elemType: shared.ComponentPlatform })
  platforms?: ComponentPlatform[];

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;
}
