import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiMapping } from "./apimapping";



export class GetApiMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ApiMapping })
  items?: ApiMapping[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
