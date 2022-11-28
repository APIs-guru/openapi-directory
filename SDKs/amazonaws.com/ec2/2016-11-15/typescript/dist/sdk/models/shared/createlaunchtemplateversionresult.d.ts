import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateVersion } from "./launchtemplateversion";
import { ValidationWarning } from "./validationwarning";
export declare class CreateLaunchTemplateVersionResult extends SpeakeasyBase {
    launchTemplateVersion?: LaunchTemplateVersion;
    warning?: ValidationWarning;
}
