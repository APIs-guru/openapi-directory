import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurations" })
  configurations?: Map<string, string>[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
