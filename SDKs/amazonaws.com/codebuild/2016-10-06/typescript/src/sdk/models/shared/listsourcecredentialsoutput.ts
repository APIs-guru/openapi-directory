import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceCredentialsInfo } from "./sourcecredentialsinfo";



export class ListSourceCredentialsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceCredentialsInfos", elemType: SourceCredentialsInfo })
  sourceCredentialsInfos?: SourceCredentialsInfo[];
}
