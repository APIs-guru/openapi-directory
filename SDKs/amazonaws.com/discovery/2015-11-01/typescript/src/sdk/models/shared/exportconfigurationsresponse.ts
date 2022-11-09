import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExportConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportId" })
  exportId?: string;
}
