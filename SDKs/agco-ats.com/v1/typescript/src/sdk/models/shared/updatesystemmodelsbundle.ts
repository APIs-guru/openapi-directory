import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active, form, name=Active;" })
  active?: boolean;

  @Metadata({ data: "json, name=BundleID, form, name=BundleID;" })
  bundleId?: string;

  @Metadata({ data: "json, name=BundleNumber, form, name=BundleNumber;" })
  bundleNumber: number;

  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @Metadata({ data: "json, name=UpdateGroupID, form, name=UpdateGroupID;" })
  updateGroupId: string;
}
