import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DelegationStatusEnum } from "./delegationstatusenum";


// DelegationMetadata
/** 
 *  The metadata associated with the specified delegation. 
**/
export class DelegationMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @Metadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @Metadata({ data: "json, name=controlSetName" })
  controlSetName?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: DelegationStatusEnum;
}
