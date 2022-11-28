import { SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicyPreviewResult } from "./lifecyclepolicypreviewresult";
import { LifecyclePolicyPreviewStatusEnum } from "./lifecyclepolicypreviewstatusenum";
import { LifecyclePolicyPreviewSummary } from "./lifecyclepolicypreviewsummary";
export declare class GetLifecyclePolicyPreviewResponse extends SpeakeasyBase {
    lifecyclePolicyText?: string;
    nextToken?: string;
    previewResults?: LifecyclePolicyPreviewResult[];
    registryId?: string;
    repositoryName?: string;
    status?: LifecyclePolicyPreviewStatusEnum;
    summary?: LifecyclePolicyPreviewSummary;
}
