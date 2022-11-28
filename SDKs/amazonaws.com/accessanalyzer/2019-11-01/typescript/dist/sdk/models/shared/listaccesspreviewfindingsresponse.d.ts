import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewFinding } from "./accesspreviewfinding";
export declare class ListAccessPreviewFindingsResponse extends SpeakeasyBase {
    findings: AccessPreviewFinding[];
    nextToken?: string;
}
