import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Host } from "./host";



export class ListHostsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Hosts", elemType: Host })
  hosts?: Host[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
