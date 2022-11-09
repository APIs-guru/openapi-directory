import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityLabel } from "./entitylabel";


export class ContainsPiiEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Labels", elemType: shared.EntityLabel })
  labels?: EntityLabel[];
}
