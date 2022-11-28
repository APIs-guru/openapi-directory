import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResourceLifecycleConfig } from "./applicationresourcelifecycleconfig";



// ApplicationDescription
/** 
 * Describes the properties of an application.
**/
export class ApplicationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationArn?: string;

  @SpeakeasyMetadata()
  applicationName?: string;

  @SpeakeasyMetadata()
  configurationTemplates?: string[];

  @SpeakeasyMetadata()
  dateCreated?: Date;

  @SpeakeasyMetadata()
  dateUpdated?: Date;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  resourceLifecycleConfig?: ApplicationResourceLifecycleConfig;

  @SpeakeasyMetadata()
  versions?: string[];
}
