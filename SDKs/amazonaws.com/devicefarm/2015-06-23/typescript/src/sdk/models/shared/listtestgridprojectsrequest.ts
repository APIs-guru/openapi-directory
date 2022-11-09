import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTestGridProjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResult" })
  maxResult?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
