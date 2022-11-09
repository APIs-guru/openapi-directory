import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobBookmarkEntry } from "./jobbookmarkentry";


export class GetJobBookmarkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobBookmarkEntry" })
  jobBookmarkEntry?: JobBookmarkEntry;
}
