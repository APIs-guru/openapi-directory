import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExportApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;
}
