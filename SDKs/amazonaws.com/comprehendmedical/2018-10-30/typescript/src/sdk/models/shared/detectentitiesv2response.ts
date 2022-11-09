import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entity } from "./entity";
import { UnmappedAttribute } from "./unmappedattribute";


export class DetectEntitiesV2Response extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.Entity })
  entities: Entity[];

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion: string;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=UnmappedAttributes", elemType: shared.UnmappedAttribute })
  unmappedAttributes?: UnmappedAttribute[];
}
