import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectVisibilityTypeEnum } from "./projectvisibilitytypeenum";
export declare class UpdateProjectVisibilityOutput extends SpeakeasyBase {
    projectArn?: string;
    projectVisibility?: ProjectVisibilityTypeEnum;
    publicProjectAlias?: string;
}
