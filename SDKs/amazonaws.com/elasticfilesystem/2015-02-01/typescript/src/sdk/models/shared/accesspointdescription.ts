import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LifeCycleStateEnum } from "./lifecyclestateenum";
import { PosixUser } from "./posixuser";
import { RootDirectory } from "./rootdirectory";
import { Tag } from "./tag";


// AccessPointDescription
/** 
 * Provides a description of an EFS file system access point.
**/
export class AccessPointDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessPointArn" })
  accessPointArn?: string;

  @Metadata({ data: "json, name=AccessPointId" })
  accessPointId?: string;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "json, name=LifeCycleState" })
  lifeCycleState?: LifeCycleStateEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=PosixUser" })
  posixUser?: PosixUser;

  @Metadata({ data: "json, name=RootDirectory" })
  rootDirectory?: RootDirectory;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
