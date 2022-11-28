import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttemptInfoRead } from "./attemptinforead";
import { JobRead } from "./jobread";



export class JobInfoRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attempts", elemType: AttemptInfoRead })
  attempts: AttemptInfoRead[];

  @SpeakeasyMetadata({ data: "json, name=job" })
  job: JobRead;
}
