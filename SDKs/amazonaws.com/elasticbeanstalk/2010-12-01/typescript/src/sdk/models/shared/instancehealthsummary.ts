import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceHealthSummary
/** 
 * Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.
**/
export class InstanceHealthSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  degraded?: number;

  @SpeakeasyMetadata()
  info?: number;

  @SpeakeasyMetadata()
  noData?: number;

  @SpeakeasyMetadata()
  ok?: number;

  @SpeakeasyMetadata()
  pending?: number;

  @SpeakeasyMetadata()
  severe?: number;

  @SpeakeasyMetadata()
  unknown?: number;

  @SpeakeasyMetadata()
  warning?: number;
}
