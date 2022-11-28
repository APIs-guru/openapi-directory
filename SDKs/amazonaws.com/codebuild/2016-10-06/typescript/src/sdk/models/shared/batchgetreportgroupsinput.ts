import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetReportGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportGroupArns" })
  reportGroupArns: string[];
}
