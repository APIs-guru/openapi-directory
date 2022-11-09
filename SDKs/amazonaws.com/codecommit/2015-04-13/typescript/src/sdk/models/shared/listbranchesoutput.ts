import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListBranchesOutput
/** 
 * Represents the output of a list branches operation.
**/
export class ListBranchesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=branches" })
  branches?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
