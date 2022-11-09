import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListExclusionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusionArns" })
  exclusionArns: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
