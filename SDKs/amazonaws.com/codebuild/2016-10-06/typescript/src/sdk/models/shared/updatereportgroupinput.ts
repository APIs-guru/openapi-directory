import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportExportConfig } from "./reportexportconfig";
import { Tag } from "./tag";


export class UpdateReportGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=exportConfig" })
  exportConfig?: ReportExportConfig;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
