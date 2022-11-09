import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentParameterDetail } from "./componentparameterdetail";
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";


// Component
/** 
 * A detailed view of a component.
**/
export class Component extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=changeDescription" })
  changeDescription?: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.ComponentParameterDetail })
  parameters?: ComponentParameterDetail[];

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @Metadata({ data: "json, name=supportedOsVersions" })
  supportedOsVersions?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: ComponentTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
