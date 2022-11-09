import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthModeEnum } from "./authmodeenum";


// StudioSummary
/** 
 * Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio.
**/
export class StudioSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthMode" })
  authMode?: AuthModeEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StudioId" })
  studioId?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
