import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetReportGroupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportGroupArns" })
  reportGroupArns: string[];
}
