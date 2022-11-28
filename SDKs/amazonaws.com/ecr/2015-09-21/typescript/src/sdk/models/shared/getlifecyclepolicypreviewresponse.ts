import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicyPreviewResult } from "./lifecyclepolicypreviewresult";
import { LifecyclePolicyPreviewStatusEnum } from "./lifecyclepolicypreviewstatusenum";
import { LifecyclePolicyPreviewSummary } from "./lifecyclepolicypreviewsummary";



export class GetLifecyclePolicyPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifecyclePolicyText" })
  lifecyclePolicyText?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=previewResults", elemType: LifecyclePolicyPreviewResult })
  previewResults?: LifecyclePolicyPreviewResult[];

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LifecyclePolicyPreviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: LifecyclePolicyPreviewSummary;
}
