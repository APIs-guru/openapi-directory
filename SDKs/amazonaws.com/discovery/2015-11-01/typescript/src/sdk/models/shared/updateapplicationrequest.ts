import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationId" })
  configurationId: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
