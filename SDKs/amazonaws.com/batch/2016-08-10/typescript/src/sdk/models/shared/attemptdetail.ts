import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttemptContainerDetail } from "./attemptcontainerdetail";



// AttemptDetail
/** 
 * An object representing a job attempt.
**/
export class AttemptDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: AttemptContainerDetail;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=stoppedAt" })
  stoppedAt?: number;
}
