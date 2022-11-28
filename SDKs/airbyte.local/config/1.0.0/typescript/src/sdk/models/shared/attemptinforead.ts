import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttemptRead } from "./attemptread";
import { LogRead } from "./logread";



export class AttemptInfoRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attempt" })
  attempt: AttemptRead;

  @SpeakeasyMetadata({ data: "json, name=logs" })
  logs: LogRead;
}
