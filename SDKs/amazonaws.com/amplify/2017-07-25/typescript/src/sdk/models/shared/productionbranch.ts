import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductionBranch
/** 
 *  Describes the information about a production branch for an Amplify app. 
**/
export class ProductionBranch extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName?: string;

  @Metadata({ data: "json, name=lastDeployTime" })
  lastDeployTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
