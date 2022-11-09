import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeExportInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportArn" })
  exportArn: string;
}
