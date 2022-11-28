import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectVisibilityTypeEnum } from "./projectvisibilitytypeenum";



export class UpdateProjectVisibilityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=projectVisibility" })
  projectVisibility: ProjectVisibilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceAccessRole" })
  resourceAccessRole?: string;
}
