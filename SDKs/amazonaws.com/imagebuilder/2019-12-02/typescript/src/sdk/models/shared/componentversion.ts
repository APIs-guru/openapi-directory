import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";


// ComponentVersion
/** 
 * The defining characteristics of a specific version of an Amazon Web Services TOE component.
**/
export class ComponentVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @Metadata({ data: "json, name=supportedOsVersions" })
  supportedOsVersions?: string[];

  @Metadata({ data: "json, name=type" })
  type?: ComponentTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
