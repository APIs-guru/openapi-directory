import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportInfo } from "./exportinfo";



export class DescribeExportConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportsInfo", elemType: ExportInfo })
  exportsInfo?: ExportInfo[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
