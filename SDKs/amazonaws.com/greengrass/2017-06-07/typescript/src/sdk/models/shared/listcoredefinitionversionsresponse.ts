import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VersionInformation } from "./versioninformation";


export class ListCoreDefinitionVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Versions", elemType: shared.VersionInformation })
  versions?: VersionInformation[];
}
