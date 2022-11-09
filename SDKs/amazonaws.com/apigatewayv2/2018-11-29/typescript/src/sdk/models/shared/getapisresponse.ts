import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Api } from "./api";


export class GetApisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Api })
  items?: Api[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
