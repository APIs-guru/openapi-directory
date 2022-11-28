import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IamActionDefinition
/** 
 *  The AWS Identity and Access Management (IAM) action definition details. 
**/
export class IamActionDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Groups" })
  groups?: string[];

  @SpeakeasyMetadata({ data: "json, name=PolicyArn" })
  policyArn: string;

  @SpeakeasyMetadata({ data: "json, name=Roles" })
  roles?: string[];

  @SpeakeasyMetadata({ data: "json, name=Users" })
  users?: string[];
}
