import { SpeakeasyBase } from "../../../internal/utils";
import { SolutionStackDescription } from "./solutionstackdescription";
/**
 * A list of available AWS Elastic Beanstalk solution stacks.
**/
export declare class ListAvailableSolutionStacksResultMessage extends SpeakeasyBase {
    solutionStackDetails?: SolutionStackDescription[];
    solutionStacks?: string[];
}
