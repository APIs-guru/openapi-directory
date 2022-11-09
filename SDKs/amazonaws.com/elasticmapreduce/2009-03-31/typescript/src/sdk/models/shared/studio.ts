import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthModeEnum } from "./authmodeenum";
import { Tag } from "./tag";


// Studio
/** 
 * Details for an Amazon EMR Studio including ID, creation time, name, and so on.
**/
export class Studio extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthMode" })
  authMode?: AuthModeEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DefaultS3Location" })
  defaultS3Location?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EngineSecurityGroupId" })
  engineSecurityGroupId?: string;

  @Metadata({ data: "json, name=IdpAuthUrl" })
  idpAuthUrl?: string;

  @Metadata({ data: "json, name=IdpRelayStateParameterName" })
  idpRelayStateParameterName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=StudioArn" })
  studioArn?: string;

  @Metadata({ data: "json, name=StudioId" })
  studioId?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=UserRole" })
  userRole?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @Metadata({ data: "json, name=WorkspaceSecurityGroupId" })
  workspaceSecurityGroupId?: string;
}
