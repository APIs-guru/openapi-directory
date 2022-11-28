import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";



export class ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: Environment })
  environments?: Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
