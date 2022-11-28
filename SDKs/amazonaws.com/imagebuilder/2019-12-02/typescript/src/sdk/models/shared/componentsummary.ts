import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";



// ComponentSummary
/** 
 * A high-level summary of a component.
**/
export class ComponentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=changeDescription" })
  changeDescription?: string;

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

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ComponentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
