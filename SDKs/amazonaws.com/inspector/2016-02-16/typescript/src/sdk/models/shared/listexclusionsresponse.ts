import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListExclusionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusionArns" })
  exclusionArns: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
