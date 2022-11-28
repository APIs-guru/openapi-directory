import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExportConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportId" })
  exportId?: string;
}
