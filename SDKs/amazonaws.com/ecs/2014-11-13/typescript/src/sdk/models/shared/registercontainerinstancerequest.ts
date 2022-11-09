import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";
import { PlatformDevice } from "./platformdevice";
import { Tag } from "./tag";
import { Resource } from "./resource";
import { VersionInfo } from "./versioninfo";


export class RegisterContainerInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: Attribute[];

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @Metadata({ data: "json, name=instanceIdentityDocument" })
  instanceIdentityDocument?: string;

  @Metadata({ data: "json, name=instanceIdentityDocumentSignature" })
  instanceIdentityDocumentSignature?: string;

  @Metadata({ data: "json, name=platformDevices", elemType: shared.PlatformDevice })
  platformDevices?: PlatformDevice[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=totalResources", elemType: shared.Resource })
  totalResources?: Resource[];

  @Metadata({ data: "json, name=versionInfo" })
  versionInfo?: VersionInfo;
}
