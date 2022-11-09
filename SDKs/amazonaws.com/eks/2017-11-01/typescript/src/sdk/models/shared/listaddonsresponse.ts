import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAddonsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=addons" })
  addons?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
