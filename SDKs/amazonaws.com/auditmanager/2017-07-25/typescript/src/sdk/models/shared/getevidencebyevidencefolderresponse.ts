import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Evidence } from "./evidence";


export class GetEvidenceByEvidenceFolderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidence", elemType: shared.Evidence })
  evidence?: Evidence[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
