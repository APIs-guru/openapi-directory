import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateStudioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultS3Location" })
  defaultS3Location?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StudioId" })
  studioId: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}
