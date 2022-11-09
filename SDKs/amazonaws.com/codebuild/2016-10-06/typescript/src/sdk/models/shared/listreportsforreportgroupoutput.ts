import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListReportsForReportGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reports" })
  reports?: string[];
}
