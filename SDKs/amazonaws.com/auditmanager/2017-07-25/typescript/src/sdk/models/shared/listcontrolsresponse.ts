import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControlMetadata } from "./controlmetadata";


export class ListControlsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=controlMetadataList", elemType: shared.ControlMetadata })
  controlMetadataList?: ControlMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
