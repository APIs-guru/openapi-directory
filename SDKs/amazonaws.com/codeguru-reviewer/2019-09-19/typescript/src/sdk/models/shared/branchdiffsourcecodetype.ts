import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BranchDiffSourceCodeType
/** 
 *  A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies a code diff between a source and destination branch in an associated repository. 
**/
export class BranchDiffSourceCodeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationBranchName" })
  destinationBranchName: string;

  @SpeakeasyMetadata({ data: "json, name=SourceBranchName" })
  sourceBranchName: string;
}
