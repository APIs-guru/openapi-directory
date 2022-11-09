import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttemptRead } from "./attemptread";
import { LogRead } from "./logread";


export class AttemptInfoRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=attempt" })
  attempt: AttemptRead;

  @Metadata({ data: "json, name=logs" })
  logs: LogRead;
}
