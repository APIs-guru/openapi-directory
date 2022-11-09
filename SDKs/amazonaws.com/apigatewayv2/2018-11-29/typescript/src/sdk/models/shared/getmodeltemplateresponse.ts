import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetModelTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Value" })
  value?: string;
}
