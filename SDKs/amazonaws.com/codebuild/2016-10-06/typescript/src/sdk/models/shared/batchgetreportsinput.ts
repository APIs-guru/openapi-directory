import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetReportsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportArns" })
  reportArns: string[];
}
