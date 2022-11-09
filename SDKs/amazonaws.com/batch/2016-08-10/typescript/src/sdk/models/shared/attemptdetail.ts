import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttemptContainerDetail } from "./attemptcontainerdetail";


// AttemptDetail
/** 
 * An object representing a job attempt.
**/
export class AttemptDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=container" })
  container?: AttemptContainerDetail;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: number;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=stoppedAt" })
  stoppedAt?: number;
}
