import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SkipWaitTimeForInstanceTerminationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;
}
