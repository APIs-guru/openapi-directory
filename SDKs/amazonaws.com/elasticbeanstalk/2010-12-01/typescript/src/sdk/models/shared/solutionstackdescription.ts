import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SolutionStackDescription
/** 
 * Describes the solution stack.
**/
export class SolutionStackDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  permittedFileTypes?: string[];

  @SpeakeasyMetadata()
  solutionStackName?: string;
}
