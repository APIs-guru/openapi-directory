import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entity } from "./entity";


export class DetectPhiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.Entity })
  entities: Entity[];

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion: string;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
