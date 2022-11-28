import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DelegationStatusEnum } from "./delegationstatusenum";



// DelegationMetadata
/** 
 *  The metadata associated with the specified delegation. 
**/
export class DelegationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSetName" })
  controlSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DelegationStatusEnum;
}
