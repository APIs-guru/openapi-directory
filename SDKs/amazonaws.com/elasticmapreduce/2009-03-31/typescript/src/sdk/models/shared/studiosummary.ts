import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthModeEnum } from "./authmodeenum";



// StudioSummary
/** 
 * Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio.
**/
export class StudioSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthMode" })
  authMode?: AuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
