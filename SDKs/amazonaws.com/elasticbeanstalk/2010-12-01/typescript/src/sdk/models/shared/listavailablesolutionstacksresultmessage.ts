import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolutionStackDescription } from "./solutionstackdescription";



// ListAvailableSolutionStacksResultMessage
/** 
 * A list of available AWS Elastic Beanstalk solution stacks.
**/
export class ListAvailableSolutionStacksResultMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SolutionStackDescription })
  solutionStackDetails?: SolutionStackDescription[];

  @SpeakeasyMetadata()
  solutionStacks?: string[];
}
