import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingArns" })
  findingArns: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
