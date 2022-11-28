import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsBundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active, form, name=Active;" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BundleID, form, name=BundleID;" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=BundleNumber, form, name=BundleNumber;" })
  bundleNumber: number;

  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateGroupID, form, name=UpdateGroupID;" })
  updateGroupId: string;
}
