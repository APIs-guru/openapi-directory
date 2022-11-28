import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Evidence } from "./evidence";



export class GetEvidenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidence" })
  evidence?: Evidence;
}
