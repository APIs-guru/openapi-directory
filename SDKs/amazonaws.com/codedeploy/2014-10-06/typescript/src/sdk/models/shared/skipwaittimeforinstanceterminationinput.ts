import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SkipWaitTimeForInstanceTerminationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;
}
