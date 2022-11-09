import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListEnvironmentsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentIds" })
  environmentIds?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
