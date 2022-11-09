import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IamActionDefinition
/** 
 *  The AWS Identity and Access Management (IAM) action definition details. 
**/
export class IamActionDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Groups" })
  groups?: string[];

  @Metadata({ data: "json, name=PolicyArn" })
  policyArn: string;

  @Metadata({ data: "json, name=Roles" })
  roles?: string[];

  @Metadata({ data: "json, name=Users" })
  users?: string[];
}
