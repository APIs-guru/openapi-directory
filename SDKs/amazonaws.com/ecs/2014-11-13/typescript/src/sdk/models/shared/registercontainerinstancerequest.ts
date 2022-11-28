import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { PlatformDevice } from "./platformdevice";
import { Tag } from "./tag";
import { Resource } from "./resource";
import { VersionInfo } from "./versioninfo";



export class RegisterContainerInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceIdentityDocument" })
  instanceIdentityDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceIdentityDocumentSignature" })
  instanceIdentityDocumentSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=platformDevices", elemType: PlatformDevice })
  platformDevices?: PlatformDevice[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=totalResources", elemType: Resource })
  totalResources?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=versionInfo" })
  versionInfo?: VersionInfo;
}
