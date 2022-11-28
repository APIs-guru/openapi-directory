import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleTypeEnum } from "./roletypeenum";



// CreateDelegationRequest
/** 
 *  A collection of attributes used to create a delegation for an assessment in Audit Manager. 
**/
export class CreateDelegationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSetId" })
  controlSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=roleType" })
  roleType?: RoleTypeEnum;
}
