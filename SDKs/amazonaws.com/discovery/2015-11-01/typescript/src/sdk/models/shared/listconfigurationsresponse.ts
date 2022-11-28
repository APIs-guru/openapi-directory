import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurations" })
  configurations?: Map<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
