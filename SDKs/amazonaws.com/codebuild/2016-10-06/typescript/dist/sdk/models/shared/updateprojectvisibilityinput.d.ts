import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectVisibilityTypeEnum } from "./projectvisibilitytypeenum";
export declare class UpdateProjectVisibilityInput extends SpeakeasyBase {
    projectArn: string;
    projectVisibility: ProjectVisibilityTypeEnum;
    resourceAccessRole?: string;
}
