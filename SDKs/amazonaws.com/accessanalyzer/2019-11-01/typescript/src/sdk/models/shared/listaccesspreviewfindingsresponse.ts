import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessPreviewFinding } from "./accesspreviewfinding";


export class ListAccessPreviewFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.AccessPreviewFinding })
  findings: AccessPreviewFinding[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
