import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceKey } from "./resourcekey";


export class StartRemediationExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedItems", elemType: shared.ResourceKey })
  failedItems?: ResourceKey[];

  @Metadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;
}
