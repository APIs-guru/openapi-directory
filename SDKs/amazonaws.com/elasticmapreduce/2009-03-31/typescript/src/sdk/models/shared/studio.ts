import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthModeEnum } from "./authmodeenum";
import { Tag } from "./tag";



// Studio
/** 
 * Details for an Amazon EMR Studio including ID, creation time, name, and so on.
**/
export class Studio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthMode" })
  authMode?: AuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultS3Location" })
  defaultS3Location?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineSecurityGroupId" })
  engineSecurityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdpAuthUrl" })
  idpAuthUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=IdpRelayStateParameterName" })
  idpRelayStateParameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioArn" })
  studioArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=UserRole" })
  userRole?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceSecurityGroupId" })
  workspaceSecurityGroupId?: string;
}
