import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SlugRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
