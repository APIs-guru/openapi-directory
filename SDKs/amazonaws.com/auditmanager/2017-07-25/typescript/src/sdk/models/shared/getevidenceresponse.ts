import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Evidence } from "./evidence";


export class GetEvidenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidence" })
  evidence?: Evidence;
}
