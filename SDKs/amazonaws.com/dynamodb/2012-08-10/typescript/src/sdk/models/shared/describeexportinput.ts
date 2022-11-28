import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeExportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportArn" })
  exportArn: string;
}
