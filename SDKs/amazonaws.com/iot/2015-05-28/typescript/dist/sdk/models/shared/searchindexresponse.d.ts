import { SpeakeasyBase } from "../../../internal/utils";
import { ThingGroupDocument } from "./thinggroupdocument";
import { ThingDocument } from "./thingdocument";
export declare class SearchIndexResponse extends SpeakeasyBase {
    nextToken?: string;
    thingGroups?: ThingGroupDocument[];
    things?: ThingDocument[];
}
