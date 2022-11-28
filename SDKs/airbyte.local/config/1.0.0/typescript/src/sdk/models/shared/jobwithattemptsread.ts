import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttemptRead } from "./attemptread";
import { JobRead } from "./jobread";



export class JobWithAttemptsRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attempts", elemType: AttemptRead })
  attempts?: AttemptRead[];

  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: JobRead;
}
