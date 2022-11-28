import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Evidence } from "./evidence";



export class GetEvidenceByEvidenceFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidence", elemType: Evidence })
  evidence?: Evidence[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
