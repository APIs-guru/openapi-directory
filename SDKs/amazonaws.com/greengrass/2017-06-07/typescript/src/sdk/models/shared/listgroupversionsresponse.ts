import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VersionInformation } from "./versioninformation";



export class ListGroupVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Versions", elemType: VersionInformation })
  versions?: VersionInformation[];
}
