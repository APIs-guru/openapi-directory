import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportInfo } from "./exportinfo";


export class DescribeExportConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportsInfo", elemType: shared.ExportInfo })
  exportsInfo?: ExportInfo[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
