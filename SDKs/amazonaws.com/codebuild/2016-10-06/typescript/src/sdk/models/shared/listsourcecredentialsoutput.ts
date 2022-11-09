import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceCredentialsInfo } from "./sourcecredentialsinfo";


export class ListSourceCredentialsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceCredentialsInfos", elemType: shared.SourceCredentialsInfo })
  sourceCredentialsInfos?: SourceCredentialsInfo[];
}
