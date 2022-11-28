import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThingGroupDocument } from "./thinggroupdocument";
import { ThingDocument } from "./thingdocument";



export class SearchIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroups", elemType: ThingGroupDocument })
  thingGroups?: ThingGroupDocument[];

  @SpeakeasyMetadata({ data: "json, name=things", elemType: ThingDocument })
  things?: ThingDocument[];
}
