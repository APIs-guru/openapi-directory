import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThingGroupDocument } from "./thinggroupdocument";
import { ThingDocument } from "./thingdocument";


export class SearchIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=thingGroups", elemType: shared.ThingGroupDocument })
  thingGroups?: ThingGroupDocument[];

  @Metadata({ data: "json, name=things", elemType: shared.ThingDocument })
  things?: ThingDocument[];
}
