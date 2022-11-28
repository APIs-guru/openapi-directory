import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuspendedProcess
/** 
 * <p>Describes an auto scaling process that has been suspended.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
**/
export class SuspendedProcess extends SpeakeasyBase {
  @SpeakeasyMetadata()
  processName?: string;

  @SpeakeasyMetadata()
  suspensionReason?: string;
}
