import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SlugRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=slug" })
  slug: string;
}
