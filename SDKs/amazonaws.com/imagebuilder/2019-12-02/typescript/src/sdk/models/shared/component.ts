import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentParameterDetail } from "./componentparameterdetail";
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";



// Component
/** 
 * A detailed view of a component.
**/
export class Component extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=changeDescription" })
  changeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ComponentParameterDetail })
  parameters?: ComponentParameterDetail[];

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
