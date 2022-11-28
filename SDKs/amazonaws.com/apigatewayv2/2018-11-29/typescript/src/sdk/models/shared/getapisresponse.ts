import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";



export class GetApisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Api })
  items?: Api[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
