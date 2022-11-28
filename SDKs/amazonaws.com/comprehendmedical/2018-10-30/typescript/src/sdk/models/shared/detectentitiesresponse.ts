import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
import { UnmappedAttribute } from "./unmappedattribute";



export class DetectEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: Entity })
  entities: Entity[];

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion: string;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UnmappedAttributes", elemType: UnmappedAttribute })
  unmappedAttributes?: UnmappedAttribute[];
}
