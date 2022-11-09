import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LifecyclePolicyPreviewStatusEnum } from "./lifecyclepolicypreviewstatusenum";
export declare class StartLifecyclePolicyPreviewResponse extends SpeakeasyBase {
    lifecyclePolicyText?: string;
    registryId?: string;
    repositoryName?: string;
    status?: LifecyclePolicyPreviewStatusEnum;
}
