import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkBinding } from "./networkbinding";



export class SubmitContainerStateChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=networkBindings", elemType: NetworkBinding })
  networkBindings?: NetworkBinding[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeId" })
  runtimeId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: string;
}
