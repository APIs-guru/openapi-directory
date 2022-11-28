import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplate } from "./launchtemplate";
import { ValidationWarning } from "./validationwarning";
export declare class CreateLaunchTemplateResult extends SpeakeasyBase {
    launchTemplate?: LaunchTemplate;
    warning?: ValidationWarning;
}
