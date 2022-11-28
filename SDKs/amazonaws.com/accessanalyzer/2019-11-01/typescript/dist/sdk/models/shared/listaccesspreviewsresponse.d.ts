import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewSummary } from "./accesspreviewsummary";
export declare class ListAccessPreviewsResponse extends SpeakeasyBase {
    accessPreviews: AccessPreviewSummary[];
    nextToken?: string;
}
