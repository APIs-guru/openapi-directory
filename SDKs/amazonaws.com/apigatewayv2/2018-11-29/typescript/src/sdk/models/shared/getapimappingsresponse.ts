import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiMapping } from "./apimapping";


export class GetApiMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.ApiMapping })
  items?: ApiMapping[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
