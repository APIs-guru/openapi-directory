import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=serviceArns" })
  serviceArns?: string[];
}
