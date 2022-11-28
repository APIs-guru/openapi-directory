import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityLabel } from "./entitylabel";



export class ContainsPiiEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Labels", elemType: EntityLabel })
  labels?: EntityLabel[];
}
