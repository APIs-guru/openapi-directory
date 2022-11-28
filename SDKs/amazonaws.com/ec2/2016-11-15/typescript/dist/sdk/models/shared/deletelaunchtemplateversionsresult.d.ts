import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteLaunchTemplateVersionsResponseSuccessItem } from "./deletelaunchtemplateversionsresponsesuccessitem";
import { DeleteLaunchTemplateVersionsResponseErrorItem } from "./deletelaunchtemplateversionsresponseerroritem";
export declare class DeleteLaunchTemplateVersionsResult extends SpeakeasyBase {
    successfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[];
    unsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[];
}
