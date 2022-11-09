import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingArns" })
  findingArns: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
