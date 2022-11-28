import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";



export class DetectPhiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: Entity })
  entities: Entity[];

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion: string;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
