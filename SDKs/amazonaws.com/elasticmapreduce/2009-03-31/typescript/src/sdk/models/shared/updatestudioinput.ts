import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateStudioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultS3Location" })
  defaultS3Location?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}
