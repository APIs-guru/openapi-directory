import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteLaunchTemplateVersionsResponseSuccessItem } from "./deletelaunchtemplateversionsresponsesuccessitem";
import { DeleteLaunchTemplateVersionsResponseErrorItem } from "./deletelaunchtemplateversionsresponseerroritem";



export class DeleteLaunchTemplateVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DeleteLaunchTemplateVersionsResponseSuccessItem })
  successfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[];

  @SpeakeasyMetadata({ elemType: DeleteLaunchTemplateVersionsResponseErrorItem })
  unsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[];
}
