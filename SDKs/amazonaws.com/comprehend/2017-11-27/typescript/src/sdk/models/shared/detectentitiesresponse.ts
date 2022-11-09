import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entity } from "./entity";


export class DetectEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.Entity })
  entities?: Entity[];
}
