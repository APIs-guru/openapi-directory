import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectVisibilityTypeEnum } from "./projectvisibilitytypeenum";


export class UpdateProjectVisibilityOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectArn" })
  projectArn?: string;

  @Metadata({ data: "json, name=projectVisibility" })
  projectVisibility?: ProjectVisibilityTypeEnum;

  @Metadata({ data: "json, name=publicProjectAlias" })
  publicProjectAlias?: string;
}
