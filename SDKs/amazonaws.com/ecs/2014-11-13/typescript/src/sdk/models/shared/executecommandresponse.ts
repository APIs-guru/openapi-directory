import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Session } from "./session";


export class ExecuteCommandResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=containerArn" })
  containerArn?: string;

  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=interactive" })
  interactive?: boolean;

  @Metadata({ data: "json, name=session" })
  session?: Session;

  @Metadata({ data: "json, name=taskArn" })
  taskArn?: string;
}
