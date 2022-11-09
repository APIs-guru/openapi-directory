import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttemptRead } from "./attemptread";
import { JobRead } from "./jobread";


export class JobWithAttemptsRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=attempts", elemType: shared.AttemptRead })
  attempts?: AttemptRead[];

  @Metadata({ data: "json, name=job" })
  job?: JobRead;
}
