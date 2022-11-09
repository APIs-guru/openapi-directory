import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTestGridUrlResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires" })
  expires?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
