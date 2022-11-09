import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricToRetain } from "./metrictoretain";
import { AlertTarget } from "./alerttarget";
import { Behavior } from "./behavior";


export class UpdateSecurityProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalMetricsToRetain" })
  additionalMetricsToRetain?: string[];

  @Metadata({ data: "json, name=additionalMetricsToRetainV2", elemType: shared.MetricToRetain })
  additionalMetricsToRetainV2?: MetricToRetain[];

  @Metadata({ data: "json, name=alertTargets", elemType: shared.AlertTarget })
  alertTargets?: Map<string, AlertTarget>;

  @Metadata({ data: "json, name=behaviors", elemType: shared.Behavior })
  behaviors?: Behavior[];

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=securityProfileArn" })
  securityProfileArn?: string;

  @Metadata({ data: "json, name=securityProfileDescription" })
  securityProfileDescription?: string;

  @Metadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
