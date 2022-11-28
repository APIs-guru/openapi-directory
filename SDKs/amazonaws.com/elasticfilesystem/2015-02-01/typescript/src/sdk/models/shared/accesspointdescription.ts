import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleStateEnum } from "./lifecyclestateenum";
import { PosixUser } from "./posixuser";
import { RootDirectory } from "./rootdirectory";
import { Tag } from "./tag";



// AccessPointDescription
/** 
 * Provides a description of an EFS file system access point.
**/
export class AccessPointDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessPointArn" })
  accessPointArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AccessPointId" })
  accessPointId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=LifeCycleState" })
  lifeCycleState?: LifeCycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=PosixUser" })
  posixUser?: PosixUser;

  @SpeakeasyMetadata({ data: "json, name=RootDirectory" })
  rootDirectory?: RootDirectory;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
