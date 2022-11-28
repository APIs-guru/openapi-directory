import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";



// ComponentVersion
/** 
 * The defining characteristics of a specific version of an Amazon Web Services TOE component.
**/
export class ComponentVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=supportedOsVersions" })
  supportedOsVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ComponentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
