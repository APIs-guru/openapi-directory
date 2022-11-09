import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodegroupIssueCodeEnum } from "./nodegroupissuecodeenum";


// Issue
/** 
 * An object representing an issue with an Amazon EKS resource.
**/
export class Issue extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: NodegroupIssueCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resourceIds" })
  resourceIds?: string[];
}
