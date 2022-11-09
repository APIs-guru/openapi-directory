import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportExportConfig } from "./reportexportconfig";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";


export class CreateReportGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportConfig" })
  exportConfig: ReportExportConfig;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=type" })
  type: ReportTypeEnum;
}
