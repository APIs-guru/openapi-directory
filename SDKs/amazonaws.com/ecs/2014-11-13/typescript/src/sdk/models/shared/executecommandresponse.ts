import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



export class ExecuteCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=containerArn" })
  containerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=interactive" })
  interactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: Session;

  @SpeakeasyMetadata({ data: "json, name=taskArn" })
  taskArn?: string;
}
