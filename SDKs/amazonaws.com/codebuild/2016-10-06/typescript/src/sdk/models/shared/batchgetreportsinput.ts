import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetReportsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportArns" })
  reportArns: string[];
}
