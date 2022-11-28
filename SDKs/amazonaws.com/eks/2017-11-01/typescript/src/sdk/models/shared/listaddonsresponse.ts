import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAddonsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addons" })
  addons?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
