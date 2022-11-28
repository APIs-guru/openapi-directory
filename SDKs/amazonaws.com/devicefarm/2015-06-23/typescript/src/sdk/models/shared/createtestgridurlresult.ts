import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTestGridUrlResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
