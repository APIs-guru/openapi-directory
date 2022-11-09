import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExportApiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;
}
