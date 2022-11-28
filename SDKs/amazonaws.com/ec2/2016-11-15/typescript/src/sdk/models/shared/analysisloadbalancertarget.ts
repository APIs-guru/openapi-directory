import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisComponent } from "./analysiscomponent";



// AnalysisLoadBalancerTarget
/** 
 * Describes a load balancer target.
**/
export class AnalysisLoadBalancerTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: string;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  instance?: AnalysisComponent;

  @SpeakeasyMetadata()
  port?: number;
}
