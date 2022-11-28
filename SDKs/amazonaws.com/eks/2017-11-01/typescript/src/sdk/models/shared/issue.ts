import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodegroupIssueCodeEnum } from "./nodegroupissuecodeenum";



// Issue
/** 
 * An object representing an issue with an Amazon EKS resource.
**/
export class Issue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: NodegroupIssueCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceIds" })
  resourceIds?: string[];
}
