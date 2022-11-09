import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentVersionListItem } from "./componentversionlistitem";


export class ListComponentVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentVersions", elemType: shared.ComponentVersionListItem })
  componentVersions?: ComponentVersionListItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
