import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";



export class StartRemediationExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedItems", elemType: ResourceKey })
  failedItems?: ResourceKey[];

  @SpeakeasyMetadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;
}
