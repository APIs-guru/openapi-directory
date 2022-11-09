import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttemptInfoRead } from "./attemptinforead";
import { JobRead } from "./jobread";


export class JobInfoRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=attempts", elemType: shared.AttemptInfoRead })
  attempts: AttemptInfoRead[];

  @Metadata({ data: "json, name=job" })
  job: JobRead;
}
