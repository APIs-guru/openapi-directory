import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListReportsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reports" })
  reports?: string[];
}
