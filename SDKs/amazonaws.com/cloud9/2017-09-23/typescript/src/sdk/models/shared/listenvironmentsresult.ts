import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListEnvironmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentIds" })
  environmentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
