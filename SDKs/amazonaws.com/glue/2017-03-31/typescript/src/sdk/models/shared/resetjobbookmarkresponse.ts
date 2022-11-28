import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobBookmarkEntry } from "./jobbookmarkentry";



export class ResetJobBookmarkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobBookmarkEntry" })
  jobBookmarkEntry?: JobBookmarkEntry;
}
