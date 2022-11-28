import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricToRetain } from "./metrictoretain";
import { AlertTarget } from "./alerttarget";
import { Behavior } from "./behavior";



export class UpdateSecurityProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetain" })
  additionalMetricsToRetain?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetainV2", elemType: MetricToRetain })
  additionalMetricsToRetainV2?: MetricToRetain[];

  @SpeakeasyMetadata({ data: "json, name=alertTargets", elemType: AlertTarget })
  alertTargets?: Map<string, AlertTarget>;

  @SpeakeasyMetadata({ data: "json, name=behaviors", elemType: Behavior })
  behaviors?: Behavior[];

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=securityProfileArn" })
  securityProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileDescription" })
  securityProfileDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
