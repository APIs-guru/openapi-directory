import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LifecyclePolicyPreviewResult } from "./lifecyclepolicypreviewresult";
import { LifecyclePolicyPreviewStatusEnum } from "./lifecyclepolicypreviewstatusenum";
import { LifecyclePolicyPreviewSummary } from "./lifecyclepolicypreviewsummary";


export class GetLifecyclePolicyPreviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifecyclePolicyText" })
  lifecyclePolicyText?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=previewResults", elemType: shared.LifecyclePolicyPreviewResult })
  previewResults?: LifecyclePolicyPreviewResult[];

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=status" })
  status?: LifecyclePolicyPreviewStatusEnum;

  @Metadata({ data: "json, name=summary" })
  summary?: LifecyclePolicyPreviewSummary;
}
