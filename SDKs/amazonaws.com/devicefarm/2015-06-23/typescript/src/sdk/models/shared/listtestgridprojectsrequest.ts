import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTestGridProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResult" })
  maxResult?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
