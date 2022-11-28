import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationId" })
  configurationId?: string;
}
