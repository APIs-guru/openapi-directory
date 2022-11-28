import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewFinding } from "./accesspreviewfinding";



export class ListAccessPreviewFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: AccessPreviewFinding })
  findings: AccessPreviewFinding[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
