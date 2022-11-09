import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleTypeEnum } from "./roletypeenum";


// CreateDelegationRequest
/** 
 *  A collection of attributes used to create a delegation for an assessment in Audit Manager. 
**/
export class CreateDelegationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=controlSetId" })
  controlSetId?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=roleType" })
  roleType?: RoleTypeEnum;
}
