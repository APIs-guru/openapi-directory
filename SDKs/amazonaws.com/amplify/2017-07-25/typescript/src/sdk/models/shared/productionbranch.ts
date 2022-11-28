import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductionBranch
/** 
 *  Describes the information about a production branch for an Amplify app. 
**/
export class ProductionBranch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastDeployTime" })
  lastDeployTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
