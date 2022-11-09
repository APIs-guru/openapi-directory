import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkBinding } from "./networkbinding";


export class SubmitContainerStateChangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=networkBindings", elemType: shared.NetworkBinding })
  networkBindings?: NetworkBinding[];

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=runtimeId" })
  runtimeId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=task" })
  task?: string;
}
